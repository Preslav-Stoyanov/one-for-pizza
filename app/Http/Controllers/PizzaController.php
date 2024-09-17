<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PizzaController extends Controller {
    public function index(Request $request): Response|RedirectResponse {
        $pizzas = Pizza::paginate(24);
        $queryPage = $request->query('page');
        $lastPage = $pizzas->lastPage();

        if ($queryPage !== null && $queryPage > $lastPage) {
            return redirect()->intended(url()->current()."?page=$lastPage");
        }
        if ($queryPage !== null && $queryPage < 1) {
            return redirect()->intended(url()->current().'?page=1');
        }

        return Inertia::render('Index', [
            'pizzas' => $pizzas,
        ]);
    }

    public function show(string $pizzaId): Response {
        return Inertia::render('Pizzas/Pizza', [
            'pizza' => Pizza::findOrFail($pizzaId),
        ]);
    }
}
