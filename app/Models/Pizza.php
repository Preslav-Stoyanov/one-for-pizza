<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pizza extends Model {
    use HasFactory;

    protected $fillable = [
        'name',
        'sizes',
        'prices',
        'ingredients',
    ];

    protected $casts = [
        'sizes' => 'array',
        'prices' => 'array',
        'ingredients' => 'array',
    ];

    public function getPricesInLevasAttribute() {
        return array_map(fn ($price) => number_format($price / 100, 2).' лв.', $this->prices);
    }

    public function getSizesWithGramsAttribute() {
        return array_map(fn ($size) => "$size гр.", $this->sizes);
    }
}
