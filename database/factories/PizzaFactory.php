<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pizza>
 */
class PizzaFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
        $pizzas = [
            'Пица Маринара', 'Пилешка Фиеста', 'Говеждо Специале', 'Свинска Магия', 'Вегетарианска Фантазия',
            'Босилекова Чудо', 'Сиренена Наслада', 'Чеснова Хармония', 'Пеперони Делукс', 'Гъбен Микс',
        ];

        $ingredients = [
            'Домати', 'Сирене', 'Босилек', 'Зехтин', 'Чесън',
            'Лук', 'Пилешко', 'Говеждо', 'Свинско', 'Гъби',
            'Черен пипер', 'Сол', 'Риган', 'Мащерка', 'Розмарин',
            'Маруля', 'Спанак', 'Морков', 'Картоф', 'Чушка',
        ];

        return [
            'name' => fake()->randomElement($pizzas),
            'sizes' => fake()->randomElements(range(350, 1500), 3),
            'prices' => fake()->randomElements(range(1000, 2800), 3),
            'ingredients' => fake()->randomElements($ingredients, 8),
        ];
    }
}
