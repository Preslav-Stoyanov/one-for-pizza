<?php

namespace App\Http\Controllers;

use App\Billing\PaymentGateway;
use App\Models\Order;
use App\Models\OrderedPizza;
use App\Models\Pizza;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller {
    private $paymentGateway;

    public function __construct(PaymentGateway $paymentGateway) {
        $this->paymentGateway = $paymentGateway;
    }

    public function store(Request $request) {
        $pizzas = $request->get('pizzas');
        $firstName = $request->get('firstName');
        $lastName = $request->get('lastName');
        $phone = $request->get('phone');
        $address = $request->get('address');
        $token = $request->get('paymentToken');

        $amount = array_reduce($pizzas, function ($total, $pizza) {
            return $total + Pizza::find($pizza['id'])->prices[$pizza['size']] * $pizza['quantity'];
        }, 0);

        DB::transaction(function () use ($pizzas, $firstName, $lastName, $phone, $address) {
            $order = Order::create([
                'first_name' => $firstName,
                'last_name' => $lastName,
                'phone' => $phone,
                'address' => $address,
            ]);

            foreach ($pizzas as $pizza) {
                OrderedPizza::create([
                    'order_id' => $order->id,
                    'pizza_id' => $pizza['id'],
                    'size' => $pizza['size'],
                    'quantity' => $pizza['quantity'],
                    'without_ingredients' => $pizza['withoutIngredients'],
                ]);
            }
        });

        $this->paymentGateway->charge($amount, $token);

        return response(null, 201);
    }
}
