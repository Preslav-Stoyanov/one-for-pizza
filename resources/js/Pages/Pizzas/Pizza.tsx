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

export default function PizzaPage({ pizza }: PageProps<{ pizza: Pizza }>) {
    const [psize, setPsize] = useState(0);
    const [count, setCount] = useState(1);

    return (
        <>
            <Head title={pizza.name} />
            <div className="flex h-screen flex-col gap-10 bg-[url(/assets/images/textures/ceramic.jpeg)] p-5">
                
                <div id="component1" className="">
                    <div className="flex flex-row items-center justify-between">
                        <Link href="/">
                            <Button className="rounded-full">
                                <ArrowLeft></ArrowLeft>
                            </Button>
                        </Link>
                        <h1 className="text-2xl font-bold">{pizza.name}</h1>
                        <span className="w-16 text-right">
                            {getSizeGrams(pizza.sizes[psize])}
                        </span>
                    </div>
                    <div className="flex w-[80%] items-center justify-center">
                        <img
                              src={`/assets/images/pizzas/${pizza.id}.jpg`}
                              alt={pizza.name}
                        />
                    </div>
                </div>
                <div id="component2" className="flex h-12 flex-row items-center justify-evenly rounded-2xl bg-white">
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
                <div  id="component3" className="flex flex-col gap-6">
                    <div className="relative flex h-40 flex-col items-center justify-center rounded-2xl bg-white">
                        <div className="absolute top-0 flex w-[45%] items-center justify-center rounded-2xl bg-red-500 text-2xl text-white">
                            <span>Описание</span>
                        </div>
                        <div className="text-center">
                            <p>{pizza.ingredients.join(", ")} </p>
                        </div>
                    </div>
                </div>
                <div id="component4" className="flex flex-col gap-6">
                    <div className="relative flex h-32 flex-col items-center justify-center rounded-2xl bg-white">
                        <div className="absolute top-0 flex w-[45%] items-center justify-center rounded-2xl bg-red-500 text-2xl text-white">
                            <span>Грамажи</span>
                        </div>
                        <div className="text-center">
                            <ul className="flex flex-row gap-3">
                                {pizza.sizes.map((size, index) => (
                                    <li className="m-2">
                                        <Button
                                            onClick={() => setPsize(index)}
                                            className="border bg-white text-black"
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
        </>
    );
}
