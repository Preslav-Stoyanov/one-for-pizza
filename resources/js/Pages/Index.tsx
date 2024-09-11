import { FoodCard } from "@/components/ui/food-card";
import { NavBar } from "@/components/ui/navbar";
import { Head, Link } from "@inertiajs/react";
import React from "react";

export default function Index() {
    const pizzas = [
        {
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
            name: "Чироза",
            description: "Индийски сос, чоризо, кашкавал, рукола ",
            sizes: [{ size: 1400, price: 1300 }],
        },
        {
            name: "Амадор",
            description:
                "Пилешко филе, чоризо, гъби, кашкавал, прошуто крудо, рукола. ",
            sizes: [{ size: 1400, price: 1300 }],
        },
        {
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
            name: "Чироза",
            description: "Индийски сос, чоризо, кашкавал, рукола ",
            sizes: [{ size: 1400, price: 1300 }],
        },
        {
            name: "Амадор",
            description:
                "Пилешко филе, чоризо, гъби, кашкавал, прошуто крудо, рукола. ",
            sizes: [{ size: 1400, price: 1300 }],
        },
    ];
    return (
        <div className="min-h-screen bg-amber-50">
            <Head title="Test" />
            <NavBar></NavBar>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="grid grid-cols-1 justify-items-center gap-x-10 p-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
                {pizzas.map((pizza) => {
                    return (
                        <FoodCard
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
