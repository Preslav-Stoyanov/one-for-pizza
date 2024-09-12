<?php

namespace App\Billing;

interface PaymentGateway {
    public function createPaymentIntent(int $amount, string $orderUuid);

    public function charge(int $amount, string $token);
}
