<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    use HasFactory;

    protected $fillable = [
      'name',
      'sizes',
      'prices',
      'ingredients'
    ];

    protected $casts = [
      'sizes' => 'array',
      'prices' => 'array',
      'ingredients' => 'array',
  ];
}
