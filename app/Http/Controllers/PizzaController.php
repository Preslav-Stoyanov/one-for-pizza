<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Inertia\Inertia;

class PizzaController extends Controller {
    public function index() {
        return Inertia::render('Index', [
            'pizzas' => Pizza::all(),
        ]);
    }

    public function show(string $pizzaId) {
        return Inertia::render('Pizzas/Pizza', [
            'pizza' => Pizza::findOrFail($pizzaId),
        ]);
    }
}
