import {
    CarTaxiFront,
    Plus,
    ShoppingBasket,
    ShoppingCartIcon,
} from "lucide-react";

type FoodCardProps = {
    name: string;
    ingredients: string;
    sizes: {
        size: number;
        price: number;
    }[];
};

export function FoodCard({ name, ingredients, sizes }: FoodCardProps) {
    return (
        <div className="m-5 mb-16 w-full">
            <div className="relative rounded bg-wood-texture bg-cover shadow-lg shadow-zinc-700/60">
                <label className="ml-4 text-2xl font-bold">{name}</label>
                <img
                    src="/assets/images/pizzas/Амадор_885.png"
                    alt="Амадор"
                    className="w-[70%]"
                />
                <div className="absolute bottom-0 right-0 flex h-full flex-col justify-end">
                    {sizes.map(({ size, price }, index) => (
                        <div
                            key={index}
                            className="flex h-full flex-row items-center gap-2"
                        >
                            <div className="flex flex-col text-sm font-semibold lg:text-base">
                                <span>{size} гр.</span>
                                <span>{price / 100} лв.</span>
                            </div>
                            <button className="flex flex-row items-center justify-center border-2 border-yellow-400 bg-red-600 text-yellow-400 shadow-lg shadow-zinc-900/70 hover:text-black">
                                <Plus strokeWidth={2.8} />
                                <ShoppingBasket strokeWidth={1.75} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-2 text-black"> {ingredients}</p>
        </div>
    );
}
