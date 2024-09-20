import { getPriceInLevas, getSizeGrams } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";
import { Pizza } from "@/types";
import { Link } from "@inertiajs/react";

import { Plus, ShoppingBasket } from "lucide-react";

export function FoodCard({ pizza }: { pizza: Pizza }) {
    const addPizzaToCart = useCartStore((state) => state.addPizza);

    return (
        <div className="w-full">
            <div className="relative rounded bg-wood-texture bg-cover shadow-lg shadow-zinc-700/60">
                <h3 className="ml-4 text-lg font-semibold">{pizza.name}</h3>
                <Link href={`/pizzas/${pizza.id}`}>
                <img
                    src={`/assets/images/pizzas/${pizza.id}.jpg`}
                    alt={pizza.name}
                    className="w-[70%]"
                />
                </Link>
                <div className="absolute bottom-4 right-0 flex h-full flex-col items-end justify-end gap-4">
                    {pizza.sizes.map((size, sizeIndex) => (
                        <div
                            key={sizeIndex}
                            className="flex flex-row items-center gap-2"
                        >
                            <div className="flex flex-col text-sm font-medium">
                                <span>{getSizeGrams(size)}</span>
                                <span>
                                    {getPriceInLevas(pizza.prices[sizeIndex])}
                                </span>
                            </div>
                            <button
                                onClick={() =>
                                    addPizzaToCart({
                                        ...pizza,
                                        size: sizeIndex,
                                        quantity: 1,
                                        withoutIngredients: [],
                                    })
                                }
                                className=" flex flex-row items-center justify-center border-2 border-yellow-400 bg-red-600 text-yellow-400 shadow-lg shadow-zinc-900/70 hover:text-black"
                            >
                                <Plus strokeWidth={2.8} />
                                <ShoppingBasket strokeWidth={1.75} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-2 capitalize text-black">
                {pizza.ingredients.join(", ")}
            </p>
        </div>
    );
}
