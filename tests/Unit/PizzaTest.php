<?php

namespace Tests\Unit;

use App\Models\Pizza;
use Tests\TestCase;

class PizzaTest extends TestCase {
    public function test_can_get_prices_in_levas(): void {
        $pizza = Pizza::factory()->make([
            'prices' => [850, 1299, 2000],
        ]);

        $this->assertEquals('8.50 лв.', $pizza->pricesInLevas[0]);
        $this->assertEquals('12.99 лв.', $pizza->pricesInLevas[1]);
        $this->assertEquals('20.00 лв.', $pizza->pricesInLevas[2]);
    }

    public function test_can_get_sizes_with_grams(): void {
        $pizza = Pizza::factory()->make([
            'sizes' => [350, 550, 1450],
        ]);

        $this->assertEquals('350 гр.', $pizza->sizesWithGrams[0]);
        $this->assertEquals('550 гр.', $pizza->sizesWithGrams[1]);
        $this->assertEquals('1450 гр.', $pizza->sizesWithGrams[2]);
    }
}
