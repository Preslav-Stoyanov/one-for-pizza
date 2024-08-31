<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class PizzaFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
        $ingredients = [
            'Tomato', 'Cheese', 'Basil', 'Olive Oil', 'Garlic',
            'Onion', 'Chicken', 'Beef', 'Pork', 'Mushrooms',
            'Pepper', 'Salt', 'Oregano', 'Thyme', 'Rosemary',
            'Lettuce', 'Spinach', 'Carrot', 'Potato', 'Bell Pepper',
        ];

        return [
            'name' => fake()->name(),
            'sizes' => fake()->randomElements(range(350, 1500), 3),
            'prices' => fake()->randomElements(range(1000, 2800), 3),
            'ingredients' => fake()->randomElements($ingredients, 8),
        ];
    }
}
