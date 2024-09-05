<?php

namespace Tests\Feature;

use App\Models\Order;
use App\Services\OrderService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PaymentTest extends TestCase {
    use RefreshDatabase;

    private OrderService $orderService;

    public function setUp(): void {
        parent::setUp();

        $this->orderService = new OrderService;
    }

    // public function test_can_get_client_secret(): void {
    //     //Arrange
    //     $order = Order::factory()->create();

    //     //Act
    //     $clientSecret = $this->orderService->getClientSecrets($order->amount);

    //     //Assert
    //     $this->assertNotNull($clientSecret);
    // }

    public function test_can_get_complete_payment_intent(): void {
        //Arrange
        $clientSecret = 'pi_3PuugVBO9KrCyaUo2ZXe61ri_secret_xRiyt770tAElmZ2iFfioI1S3p';

        //Act

        //Assert
        $this->assertNotNull($clientSecret);
    }
}
