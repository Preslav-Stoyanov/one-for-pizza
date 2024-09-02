<?php

namespace App\Billing;

use Illuminate\Support\Collection;

class FakePaymentGateway implements PaymentGateway {
    private Collection $charges;

    public function __construct() {
        $this->charges = collect();
    }

    public function getValidTestToken(): string {
        return 'valid-token';
    }

    public function charge(int $amount, string $token): void {
        $this->charges[] = $amount;
    }

    public function totalCharges(): int {
        return $this->charges->sum();
    }
}
