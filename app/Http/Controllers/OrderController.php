<?php

namespace App\Http\Controllers;

use App\Billing\PaymentGateway;
use App\Http\Requests\CreateOrderRequest;
use App\Models\Pizza;
use App\Services\OrderService;
use Illuminate\Http\JsonResponse;

class OrderController extends Controller {
    private OrderService $orderService;

    private PaymentGateway $paymentGateway;

    public function __construct(
        OrderService $orderService,
        PaymentGateway $paymentGateway
    ) {
        $this->orderService = $orderService;
        $this->paymentGateway = $paymentGateway;
    }

    public function store(CreateOrderRequest $request): JsonResponse {
        $pizzas = $request->get('pizzas');

        $amount = array_reduce($pizzas, function ($total, $pizza) {
            return $total + Pizza::findOrFail($pizza['id'])->prices[$pizza['size']] * $pizza['quantity'];
        }, 0);

        $order = $this->orderService->createOrder(
            $pizzas,
            $request->get('firstName'),
            $request->get('lastName'),
            $request->get('phone'),
            $request->get('address'),
            $amount,
        );

        $clientSecret = $this->paymentGateway->createPaymentIntent($amount, $order->uuid);

        return response()->json(['orderUuid' => $order->uuid, 'clientSecret' => $clientSecret], 201);
    }
}
