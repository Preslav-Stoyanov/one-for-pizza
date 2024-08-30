<?php

namespace Tests\Feature;

use App\Models\Pizza;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ViewPizzaTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     */
    public function test_user_can_view_pizza(): void {
        //Arrange
        $pizza = Pizza::create([
            'name' => 'Велизарий',
            'sizes' => [350, 550, 1450],
            'prices' => [980, 1600, 2830],
            'ingredients' => ['Доматен сос', 'шунка', 'бекон', 'маслини', 'царевица', 'гъби', 'кашкавал', 'топено сирене', 'ементал'],
        ]);

        //Act
        $res = $this->get("pizzas/$pizza->id");

        //Assert
        $res->assertOk();
        $res->assertSee("Велизарий");
        $res->assertSee("350 гр.");
        $res->assertSee("550 гр.");
        $res->assertSee("1450 гр.");
        $res->assertSee("9.80 лв.");
        $res->assertSee("1600 лв.");
        $res->assertSee("2830 лв.");
    }
}
