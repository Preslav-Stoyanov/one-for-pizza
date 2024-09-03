<?php

namespace App\Http\Controllers;

use App\Billing\PaymentGateway;
use App\Exceptions\PaymentFailedException;
use App\Http\Requests\StoreOrderRequest;
use App\Models\Pizza;
use App\Services\OrderService;

class OrderController extends Controller {
    private OrderService $orderService;

    private PaymentGateway $paymentGateway;

    public function __construct(OrderService $orderService, PaymentGateway $paymentGateway) {
        $this->orderService = $orderService;
        $this->paymentGateway = $paymentGateway;
    }

    public function store(StoreOrderRequest $request) {
        $pizzas = $request->get('pizzas');

        $amount = array_reduce($pizzas, function ($total, $pizza) {
            return $total + Pizza::findOrFail($pizza['id'])->prices[$pizza['size']] * $pizza['quantity'];
        }, 0);

        try {
            $this->paymentGateway->charge($amount, $request->get('paymentToken'));

            $this->orderService->createOrder(
                $pizzas,
                $request->get('firstName'),
                $request->get('lastName'),
                $request->get('phone'),
                $request->get('address'),
                $amount
            );

            return response(null, 201);
        } catch (PaymentFailedException $th) {
            return response(null, 422);
        }

    }
}
