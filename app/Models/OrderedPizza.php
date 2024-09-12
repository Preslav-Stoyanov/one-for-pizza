<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderedPizza extends Model {
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'order_uuid',
        'pizza_id',
        'size',
        'quantity',
        'without_ingredients',
    ];

    protected $casts = [
        'without_ingredients' => 'array',
    ];
}
