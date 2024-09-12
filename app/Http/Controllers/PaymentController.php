<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PaymentController extends Controller {
    public function create(Request $request) {
        return Inertia::render('Payment', [
            'clientSecret' => $request->get('clientSecret'),
        ]);
    }
}
