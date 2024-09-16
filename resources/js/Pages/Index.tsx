import { FoodCard } from "@/components/ui/food-card";
import { Navbar } from "@/components/ui/navbar";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Index() {
    const pizzas = [
        {
            id: 1,
            name: "Прошуто",
            ingredients: [
                "Доматен сос",
                "кашоматен сос",
                "кашкавал",
                "прошуто крудо",
                "рукола",
            ],
            sizes: [1400, 1500, 1600],
            prices: [1300, 1400, 1500],
        },
    ];

    return (
        <div className="min-h-screen bg-amber-50">
            <Head title="Test" />
            <Navbar />
            <div className="grid grid-cols-1 justify-items-center gap-x-10 p-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
                {pizzas.map((pizza) => {
                    return <FoodCard key={pizza.id} pizza={pizza}></FoodCard>;
                })}
            </div>
        </div>
    );
}
