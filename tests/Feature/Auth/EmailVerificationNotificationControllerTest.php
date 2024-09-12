<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class EmailVerificationNotificationControllerTest extends TestCase {
    use RefreshDatabase;

    public function test_it_redirects_if_email_is_already_verified() {
        //Arrange
        $user = User::factory()->create([
            'email_verified_at' => now(),
        ]);

        //Act
        $res = $this->actingAs($user)->post(route('verification.send'));

        //Assert
        $res->assertRedirect(route('dashboard'));
    }
}
