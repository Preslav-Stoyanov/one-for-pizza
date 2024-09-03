<?php

namespace Tests\Unit;

use App\Models\Order;
use App\Models\OrderedPizza;
use Tests\TestCase;

class OrderTest extends TestCase {
    public function test_order_can_be_cancelled(): void {
        //Arrange
        $order = Order::factory()->create();
        $orderedPizza = OrderedPizza::factory()->create([
            'order_id' => $order->id,
        ]);

        //Act
        $order->cancel();

        //Assert
        $this->assertNull(Order::find($order->id));
        $this->assertNull(OrderedPizza::find($orderedPizza->id));
    }
}
