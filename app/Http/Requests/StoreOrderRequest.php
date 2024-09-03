<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreOrderRequest extends FormRequest {
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array {
        return [
            'pizzas' => ['required', 'array'],
            'pizzas.*.id' => ['required'],
            'pizzas.*.size' => ['required', 'numeric', 'min:0'],
            'pizzas.*.quantity' => ['required', 'numeric', 'min:1', 'max:32'],
            'pizzas.*.withoutIngredients' => ['nullable'],
            'firstName' => ['required', 'string', 'max:32'],
            'lastName' => ['required', 'string', 'max:32'],
            'phone' => ['required', 'string', 'min:10', 'max:15'],
            'address' => ['required', 'string', 'max:100'],
            'paymentToken' => ['required', 'string'],
        ];
    }
}
