<?php

namespace Tests\Feature;

use App\Billing\PaymentGateway;
use App\Billing\StripePaymentGateway;
use App\Models\Order;
use App\Models\Pizza;
use App\Services\OrderService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StoreOrderTest extends TestCase {
    use RefreshDatabase;

    private StripePaymentGateway $paymentGateway;

    private OrderService $orderService;

    public function setUp(): void {
        parent::setUp();

        $this->orderService = new OrderService;
        $this->paymentGateway = new StripePaymentGateway;
        $this->app->instance(PaymentGateway::class, $this->paymentGateway);
    }

    public function test_user_can_order_pizzass_with_valid_payment_token(): void {
        //Arrange
        $pizzas = Pizza::factory()->count(2)->create();
        $total =
        $pizzas[0]->prices[0] * 2 +
        $pizzas[0]->prices[1] * 1 +
        $pizzas[1]->prices[2] * 3;

        //Act
        $res = $this->postJson('orders', [
            'pizzas' => [
                ['id' => $pizzas[0]->id, 'size' => 0, 'quantity' => 2],
                ['id' => $pizzas[0]->id, 'size' => 1, 'quantity' => 1, 'withoutIngredients' => [$pizzas[0]->ingredients[0]]],
                ['id' => $pizzas[1]->id, 'size' => 2, 'quantity' => 3],
            ],
            'firstName' => 'Preslav',
            'lastName' => 'Stoyanov',
            'phone' => '0891337980',
            'address' => 'bulevard "Lipnik", 123',
            'paymentToken' => $this->paymentGateway->getValidTestToken(),
        ]);
        $order = Order::where('phone', '0891337980')->first();

        //Assert
        $res->assertStatus(201);
        $this->assertEquals($total, $this->paymentGateway->totalCharges());
        $this->assertNotNull($order);
        $this->assertCount(3, $order->pizzas);
    }

    public function test_user_cant_order_pizzas_because_invalid_payment_token(): void {
        $this->withoutExceptionHandling();
        //Arrange
        $pizza = Pizza::factory()->create();

        //Act
        $res = $this->postJson('orders', [
            'pizzas' => [
                ['id' => $pizza->id, 'size' => 0, 'quantity' => 2],
            ],
            'firstName' => 'Preslav',
            'lastName' => 'Stoyanov',
            'phone' => '0891337980',
            'address' => 'bulevard "Lipnik", 123',
            'paymentToken' => 'invalid-payment-token',
        ]);

        $order = Order::where('phone', '0891337980')->first();

        //Assert
        $res->assertStatus(422);
        $this->assertNull($order);
    }

    public function test_valid_pizza_is_required_to_order(): void {
        //Act
        $res = $this->postJson('orders', [
            'pizzas' => [
                ['id' => 0, 'size' => 0, 'quantity' => 1],
            ],
            'firstName' => 'Preslav',
            'lastName' => 'Stoyanov',
            'phone' => '0891337980',
            'address' => 'bulevard "Lipnik", 123',
            'paymentToken' => $this->paymentGateway->getValidTestToken(),
        ]);

        //Assert
        $res->assertStatus(404);
    }

    public function test_fields_are_required_to_order(): void {
        //Arrange
        $fields = ['pizzas', 'firstName', 'lastName', 'phone', 'address', 'paymentToken'];

        //Act
        $res = $this->postJson('orders');

        //Assert
        $res->assertStatus(422);
        $res->assertJsonValidationErrors(array_fill_keys($fields, 'required'));
    }

    public function test_pizza_fields_are_required_to_order(): void {
        //Arrange
        $fields = ['pizzas.0.id', 'pizzas.0.size', 'pizzas.0.quantity'];

        //Act
        $res = $this->postJson('orders', [
            'pizzas' => ['nothing'],
            'firstName' => 'Preslav',
            'lastName' => 'Stoyanov',
            'phone' => '0891337980',
            'address' => 'bulevard "Lipnik", 123',
            'paymentToken' => $this->paymentGateway->getValidTestToken(),
        ]);

        //Assert
        $res->assertStatus(422);
        $res->assertJsonValidationErrors(array_fill_keys($fields, 'required'));
    }

    public function test_fields_min(): void {
        $pizza = Pizza::factory()->create();

        //Act
        $res = $this->postJson('orders', [
            'pizzas' => [
                ['id' => $pizza->id, 'size' => -1, 'quantity' => 0],
            ],
            'firstName' => 'Preslav',
            'lastName' => 'Stoyanov',
            'phone' => '123456789',
            'address' => 'bulevard "Lipnik", 123',
            'paymentToken' => $this->paymentGateway->getValidTestToken(),
        ]);

        //Assert
        $res->assertStatus(422);
        $res->assertJsonValidationErrors([
            'pizzas.0.size' => '0',
            'pizzas.0.quantity' => '1',
            'phone' => '10',
        ]);
    }

    public function test_fields_max(): void {
        $pizza = Pizza::factory()->create();

        //Act
        $res = $this->postJson('orders', [
            'pizzas' => [
                ['id' => $pizza->id, 'size' => 0, 'quantity' => 33],
            ],
            'firstName' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'lastName' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            'phone' => 'Lorem ipsum dolor sit.',
            'address' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, animi laborum. Officiis, dolore inventore. Iusto, animi. Obcaecati necessitatibus cum numquam.',
            'paymentToken' => $this->paymentGateway->getValidTestToken(),
        ]);

        //Assert
        $res->assertStatus(422);
        $res->assertJsonValidationErrors([
            'pizzas.0.quantity' => '32',
            'firstName' => '32',
            'lastName' => '32',
            'phone' => '15',
            'address' => '100',
        ]);
    }
}
