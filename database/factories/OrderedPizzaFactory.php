<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\Pizza;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderedPizza>
 */
class OrderedPizzaFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
        return [
            'order_id' => fn () => Order::factory()->create()->id,
            'pizza_id' => fn () => Pizza::factory()->create()->id,
            'size' => random_int(0, 2),
            'quantity' => random_int(1, 10),
            'without_ingredients' => [],
        ];
    }
}
