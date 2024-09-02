<?php

namespace Tests\Unit;

use App\Billing\FakePaymentGateway;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FakePaymentGatewayTest extends TestCase {
    use RefreshDatabase;

    /**
     * A basic test example.
     */
    public function test_charges_with_a_valid_payment_token_are_successful(): void {
        //Arrange
        $paymentGateway = new FakePaymentGateway;

        //Act
        $paymentGateway->charge(2500, $paymentGateway->getValidTestToken());

        //Assert
        $this->assertEquals(2500, $paymentGateway->totalCharges());
    }
}
