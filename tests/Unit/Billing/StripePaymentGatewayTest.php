<?php

namespace Tests\Unit\Billing;

use App\Billing\FakePaymentGateway;
use App\Exceptions\PaymentFailedException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class StripePaymentGatewayTest extends TestCase {
    use RefreshDatabase;

    private FakePaymentGateway $paymentGateway;

    public function setUp(): void {
        parent::setUp();

        $this->paymentGateway = new FakePaymentGateway;
    }

    public function test_charges_with_a_valid_payment_token_are_successful(): void {
        //Arrange
        $paymentGateway = new StripePaymentGateway;
        $paymentGateway->charge(2500, '');

        //Act
        $this->paymentGateway->charge(2500, $this->paymentGateway->getValidTestToken());

        //Assert
        $this->assertEquals(2500, $this->paymentGateway->totalCharges());
    }
}
