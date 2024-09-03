<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model {
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'address',
        'amount',
    ];

    public function pizzas(): HasMany {
        return $this->hasMany(OrderedPizza::class);
    }

    public function cancel(): void {
        $this->delete();
    }
}
