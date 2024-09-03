<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('ordered_pizzas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained(table: 'orders')->cascadeOnDelete();
            $table->foreignId('pizza_id')->constrained(table: 'pizzas')->noActionOnDelete();
            $table->unsignedTinyInteger('size');
            $table->unsignedInteger('quantity');
            $table->json('without_ingredients');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('ordered_pizzas');
    }
};
