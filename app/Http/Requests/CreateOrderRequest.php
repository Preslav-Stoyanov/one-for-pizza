<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrderRequest extends FormRequest {
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
            'pizzas.*.withoutIngredients' => ['array', 'nullable'],
            'firstName' => ['required', 'string', 'max:32'],
            'lastName' => ['required', 'string', 'max:32'],
            'phone' => ['required', 'string', 'min:10', 'max:20'],
            'address' => ['required', 'string', 'max:100'],
            'entrance' => ['nullable', 'string'],
            'floor' => ['nullable', 'integer', 'min:1'],
            'appartment' => ['nullable', 'string'],
            'additionalInfo' => ['nullable', 'string'],
        ];
    }
}
