import { PageProps, Pizza } from "@/types";
import { Button } from "@/components/ui/button";
import { Head, usePage, Link } from "@inertiajs/react";
import {
    ArrowLeft,
    MinusCircle,
    PlusCircle,
    ShoppingBasket,
    ShoppingCart,
} from "lucide-react";
import { QuantityInput } from "@/components/QuantityInput";
import { useState } from "react";
import { getPriceInLevas, getSizeGrams } from "@/lib/utils";
import { PriceCart } from "@/components/pizzaPage/priceCard";

export default function PizzaPage({ pizza }: PageProps<{ pizza: Pizza }>) {
    const [psize, setPsize] = useState(0);
    const [count, setCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState(0);

    return (
        <>
            <Head title={pizza.name} />
            <div className="flex flex-col h-screen bg-[url(/assets/images/textures/ceramic.jpg)] bg-cover p-5 lg:items-center">
                <div className="flex flex-row items-center justify-between lg:w-[50%] lg:justify-between">
                    <Link href="/">
                        <Button className="rounded-full">
                            <ArrowLeft></ArrowLeft>
                        </Button>
                    </Link>
                    <h1 className="text-2xl font-bold lg:text-5xl">
                        {pizza.name}
                    </h1>
                    <span className="w-16 text-right lg:w-[12%] lg:text-2xl">
                        {getSizeGrams(pizza.sizes[psize])}
                    </span>
                </div>
                <div className="flex flex-col items-center gap-10">
                    <div id="component1" className="">
                        <div className="flex w-[80%] lg:w-[100%] items-center justify-center">
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
                        <span>
                            Крайна цена:{" "}
                            {getPriceInLevas(pizza.prices[psize] * count)}
                        </span>
                        <MinusCircle
                            onClick={() =>
                                count > 1 ? setCount((a) => a - 1) : null
                            }
                        />
                        <span>{count}</span>{" "}
                        <PlusCircle onClick={() => setCount((a) => a + 1)} />
                        <ShoppingBasket />
                    </div>
                    {/* <PriceCart pizza={pizza} ></PriceCart> */}
                    <div id="component3" className="flex flex-col gap-6  min-w-[100%]">
                        <div className="relative flex  min-h-40 lg:min-h-40 lg:min-w-40 flex-col items-center justify-center rounded-2xl bg-white  ">
                            <div className="absolute top-0 flex w-[45%] items-center justify-center rounded-2xl bg-red-500 text-2xl text-white">
                                <span>Описание</span>
                            </div>
                            <div className="text-center m-5">
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
                                                    setSelectedSize(index);
                                                    setPsize(index);
                                                }}
                                                className={`border ${
                                                    selectedSize === index
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
                {/* [[[[]]]] */}
            </div>
        </>
    );
}
