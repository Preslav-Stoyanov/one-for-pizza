<?php

namespace Tests\Unit\Billing;

use Illuminate\Support\Facades\File;
use Stripe\StripeClient;
use Tests\TestCase;

class ImportPizzasToStripeTest extends TestCase {
    public function test_can_import(): void {
        //Arrange
        $pizzas = File::json(base_path('/storage/app/pizzas/pizzas.json'));
        $stripe = new StripeClient('sk_test_51LfqCABO9KrCyaUofyB9fhXF3nvxxqQWg2SKWLQ6qex6ua7td7ax3SyJ4Uidc0U6af6FAsIV1MLHanEwvOFlgyJV00d6O4vchh');
        foreach ($pizzas as $pizza) {
            $stripe->products->create(['name' => $pizza['name'], 'default_price_data' => ['currency' => 'bgn',  'unit_amount' => $pizza['sizes'][0]['price']]]);
            dd($pizza);
        }
        dd($pizzas);

        //Act

        //Assert
    }
}
