import { FoodCard } from "@/components/ui/food-card";
import { Navbar } from "@/components/ui/navbar";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Index() {
    const pizzas = [
        {
            id: 1,
            name: "Прошуто",
            description:
                "Доматен сос, гъби- печурки/манатарки, кашоматен сос, гъби- печурки/манатарки, кашкавал, прошуто крудо, рукола ",
            sizes: [
                { size: 1400, price: 1300 },
                { size: 1400, price: 1300 },
                { size: 1400, price: 1300 },
            ],
        },
        {
            id: 2,
            name: "Чироза",
            description: "Индийски сос, чоризо, кашкавал, рукола ",
            sizes: [{ size: 1400, price: 1300 }],
        },
        {
            id: 3,
            name: "Амадор",
            description:
                "Пилешко филе, чоризо, гъби, кашкавал, прошуто крудо, рукола. ",
            sizes: [{ size: 1400, price: 1300 }],
        },
        {
            id: 4,
            name: "Прошуто",
            description:
                "Доматен сос, гъби- печурки/манатарки, кашоматен сос, гъби- печурки/манатарки, кашкавал, прошуто крудо, рукола ",
            sizes: [
                { size: 1400, price: 1300 },
                { size: 1400, price: 1300 },
                { size: 1400, price: 1300 },
            ],
        },
        {
            id: 5,
            name: "Чироза",
            description: "Индийски сос, чоризо, кашкавал, рукола ",
            sizes: [{ size: 1400, price: 1300 }],
        },
        {
            id: 6,
            name: "Амадор",
            description:
                "Пилешко филе, чоризо, гъби, кашкавал, прошуто крудо, рукола. ",
            sizes: [{ size: 1400, price: 1300 }],
        },
    ];
    return (
        <div className="min-h-screen bg-amber-50">
            <Head title="Test" />
            <Navbar />
            <div className="grid grid-cols-1 justify-items-center gap-x-10 p-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
                {pizzas.map((pizza) => {
                    return (
                        <FoodCard
                            key={pizza.id}
                            name={pizza.name}
                            ingredients={pizza.description}
                            sizes={pizza.sizes}
                        ></FoodCard>
                    );
                })}
            </div>
        </div>
    );
}
