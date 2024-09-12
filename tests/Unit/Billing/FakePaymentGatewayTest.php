<?php

namespace Tests\Unit\Billing;

use App\Billing\StripePaymentGateway;
use App\Exceptions\PaymentFailedException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FakePaymentGatewayTest extends TestCase {
    use RefreshDatabase;

    private StripePaymentGateway $paymentGateway;

    public function setUp(): void {
        parent::setUp();

        $this->paymentGateway = new StripePaymentGateway;
    }

    public function test_charges_with_a_valid_payment_token_are_successful(): void {
        //Act
        $this->paymentGateway->charge(2500, $this->paymentGateway->getValidTestToken());

        //Assert
        $this->assertEquals(2500, $this->paymentGateway->totalCharges());
    }

    public function test_charges_with_an_invalid_payment_token_fail(): void {
        $this->expectException(PaymentFailedException::class);

        $this->paymentGateway->charge(2500, 'invalid-payment-token');
    }
}
