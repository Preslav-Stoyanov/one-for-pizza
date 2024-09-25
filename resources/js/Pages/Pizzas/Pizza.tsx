import { Head, usePage, Link } from "@inertiajs/react";
import { PageProps, Pizza } from "@/types";

import { getPriceInLevas, getSizeGrams } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBasket } from "lucide-react";
import { QuantityInput } from "@/components/QuantityInput";
import { useState } from "react";
import { PriceCart } from "@/components/pizzaPage/priceCard";
import { Navbar } from "@/components/ui/navbar";

export default function PizzaPage({ pizza }: PageProps<{ pizza: Pizza }>) {
    const [size, setSize] = useState<number>(0);
    const [count, setCount] = useState<number>(1);

    function handleIncrease() {
        if (count >= 32) setCount(32);
        else setCount((prev) => prev + 1);
    }

    function handleDecrease() {
        if (count <= 1) setCount(1);
        else setCount((prev) => prev - 1);
    }

    return (
        <>
            <Head title={pizza.name} />
            <Navbar />
            <div
                className="flex h-screen flex-col bg-cover p-5 lg:items-center"
                style={{
                    backgroundImage: "url(/assets/images/textures/ceramic.jpg)",
                }}
            >
                <div className="flex flex-row items-center justify-between lg:w-[50%] lg:justify-between">
                    <Link href="/">
                        <Button className="rounded-full">
                            <ArrowLeft />
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-bold lg:text-5xl">
                        {pizza.name}
                    </h1>
                    <span className="w-16 text-right lg:w-[12%] lg:text-2xl">
                        {getSizeGrams(pizza.sizes[size])}
                    </span>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <div id="component1" className="">
                        <div className="flex w-[80%] items-center justify-center lg:w-[100%]">
                            <img
                                src={`/assets/images/pizzas/${pizza.id}.jpg`}
                                alt={pizza.name}
                            />
                        </div>
                    </div>
                    <div
                        id="component2"
                        className="flex h-12 w-[100%] flex-row items-center justify-evenly rounded-2xl bg-white"
                    >
                        <QuantityInput
                            quantity={count}
                            increase={handleIncrease}
                            decrease={handleDecrease}
                        />
                        <ShoppingBasket />
                    </div>
                    {/* <PriceCart pizza={pizza} ></PriceCart> */}
                    <div
                        id="component3"
                        className="flex min-w-[100%] flex-col gap-6"
                    >
                        <div className="relative flex min-h-40 flex-col items-center justify-center rounded-2xl bg-white lg:min-h-40 lg:min-w-40">
                            <div className="absolute top-0 flex w-[45%] items-center justify-center rounded-2xl bg-red-500 text-2xl text-white">
                                <span>Описание</span>
                            </div>
                            <div className="m-5 text-center">
                                <p>{pizza.ingredients.join(", ")} </p>
                            </div>
                        </div>
                    </div>
                    <div
                        id="component4"
                        className="flex w-[100%] flex-col gap-6"
                    >
                        <div className="relative flex h-32 flex-col items-center justify-center rounded-2xl bg-white">
                            <div className="absolute top-0 flex w-[45%] items-center justify-center rounded-2xl bg-red-500 text-2xl text-white">
                                <span>Грамажи</span>
                            </div>
                            <div className="text-center">
                                <ul className="flex flex-row gap-3">
                                    {pizza.sizes.map((size, index) => (
                                        <li key={index} className="m-2">
                                            <Button
                                                onClick={() => {
                                                    setSize(index);
                                                }}
                                                className={`border ${
                                                    size === index
                                                        ? "bg-black text-white"
                                                        : "bg-white text-black"
                                                }`}
                                            >
                                                {getSizeGrams(size)}
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
