<?php

namespace Tests\Feature;

use App\Billing\FakePaymentGateway;
use App\Billing\PaymentGateway;
use App\Models\Order;
use App\Models\Pizza;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StoreOrderTest extends TestCase {
    use RefreshDatabase;

    /**
     * A basic test example.
     */
    public function test_user_can_order_pizzass(): void {
        //Arrange
        $paymentGateway = new FakePaymentGateway;
        $this->app->instance(PaymentGateway::class, $paymentGateway);

        $pizzas = Pizza::factory()->count(2)->create();
        $total =
        $pizzas[0]->prices[0] * 2 +
        $pizzas[0]->prices[1] * 1 +
        $pizzas[1]->prices[2] * 3;

        //Act
        $res = $this->post('orders', [
            'pizzas' => [
                ['id' => $pizzas[0]->id, 'size' => 0, 'quantity' => 2, 'withoutIngredients' => []],
                ['id' => $pizzas[0]->id, 'size' => 1, 'quantity' => 1, 'withoutIngredients' => [$pizzas[0]->ingredients[0]]],
                ['id' => $pizzas[1]->id, 'size' => 2, 'quantity' => 3, 'withoutIngredients' => []],
            ],
            'firstName' => 'Preslav',
            'lastName' => 'Stoyanov',
            'phone' => '0891337980',
            'address' => 'bulevard "Lipnik", 123',
            'paymentToken' => $paymentGateway->getValidTestToken(),
        ]);
        $order = Order::where('phone', '0891337980')->first();

        //Assert
        $res->assertStatus(201);
        $this->assertEquals($total, $paymentGateway->totalCharges());
        $this->assertNotNull($order);
        $this->assertCount(3, $order->pizzas);
    }
}
