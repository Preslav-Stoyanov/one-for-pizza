<?php

namespace Database\Seeders;

use App\Models\Pizza;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder {
    public function run(): void {
        $data = File::json(database_path('seeds/pizzas.json'));
        $pizzas = array_map(function ($pizza) {
            $sizes = [];
            $prices = [];

            foreach ($pizza['sizes'] as $size) {
                $sizes[] = $size['size'];
                $prices[] = $size['price'];
            }

            return [
                'name' => $pizza['name'],
                'sizes' => json_encode($sizes),
                'prices' => json_encode($prices),
                'ingredients' => json_encode($pizza['ingredients']),
            ];
        }, $data);

        Pizza::insert($pizzas);
    }
}
