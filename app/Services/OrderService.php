<?php

namespace App\Services;

use App\Models\Order;
use App\Models\OrderedPizza;
use Illuminate\Support\Facades\DB;
use Stripe\StripeClient;

class OrderService {
    public function createOrder(
        array $pizzas,
        string $firstName,
        string $lastName,
        string $phone,
        string $address,
        int $amount
    ): Order {
        return DB::transaction(function () use ($pizzas, $firstName, $lastName, $phone, $address, $amount) {
            $order = Order::create([
                'first_name' => $firstName,
                'last_name' => $lastName,
                'phone' => $phone,
                'address' => $address,
                'amount' => $amount,
            ]);

            foreach ($pizzas as $pizza) {
                OrderedPizza::create([
                    'order_id' => $order->id,
                    'pizza_id' => $pizza['id'],
                    'size' => $pizza['size'],
                    'quantity' => $pizza['quantity'],
                    'without_ingredients' => array_key_exists('withoutIngredients', $pizza) ? $pizza['withoutIngredients'] : [],
                ]);
            }

            return $order;
        });
    }

    public function getClientSecret(int $amount, int $orderId) {
        $stripe = new StripeClient(config('services.stripe.secret'));

        $paymentIntent = $stripe->paymentIntents->create([
            'amount' => $amount,
            'currency' => 'bgn',
            'metadata' => ['order_id' => $orderId],
        ]);

        return $paymentIntent->client_secret;
    }
}
