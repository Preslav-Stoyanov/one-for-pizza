<?php

namespace App\Billing;

use App\Exceptions\PaymentFailedException;
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
        if ($token !== $this->getValidTestToken()) {
            throw new PaymentFailedException;
        }
        $this->charges[] = $amount;
    }

    public function totalCharges(): int {
        return $this->charges->sum();
    }
}
