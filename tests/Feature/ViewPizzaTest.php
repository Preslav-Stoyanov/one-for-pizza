<?php

namespace Tests\Feature;

use App\Models\Pizza;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ViewPizzaTest extends TestCase {
    use RefreshDatabase;

    /**
     * A basic test example.
     */
    public function test_user_can_view_pizza(): void {
        //Arrange
        $pizza = Pizza::factory()->create([
            'name' => 'Велизарий',
            'sizes' => [350, 550, 1450],
            'prices' => [980, 1600, 2830],
            'ingredients' => ['Доматен сос', 'шунка', 'бекон', 'маслини', 'царевица', 'гъби', 'кашкавал', 'топено сирене', 'ементал'],
        ]);

        //Act
        $res = $this->get("pizzas/$pizza->id");

        //Assert
        $res->assertOk();
        $res->assertInertia(fn (Assert $page) => $page
            ->component('Pizzas/Pizza')
            ->has('pizza', fn (Assert $page) => $page
                ->where('id', $pizza->id)
                ->where('name', $pizza->name)
                ->has('sizes', count($pizza->sizes))
                ->has('prices', count($pizza->prices))
                ->has('ingredients', count($pizza->ingredients))
                ->has('created_at')
                ->has('updated_at')
            )
        );
    }

    public function test_user_cant_view_pizza_because_pizza_doesnt_exist(): void {
        //Act
        $res = $this->get('pizzas/1');

        //Assert
        $res->assertNotFound();
    }
}
