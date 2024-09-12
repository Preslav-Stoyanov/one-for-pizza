<?php

namespace App\Billing;

use Stripe\StripeClient;

class StripePaymentGateway implements PaymentGateway {
    public function createPaymentIntent(int $amount, string $orderUuid) {
        $stripe = new StripeClient(config('services.stripe.secret'));

        $paymentIntent = $stripe->paymentIntents->create([
            'amount' => $amount,
            'currency' => 'bgn',
            'metadata' => ['order_uuid' => $orderUuid],
        ]);

        return $paymentIntent->client_secret;
    }

    public function charge(int $amount, string $token): void {}
}
