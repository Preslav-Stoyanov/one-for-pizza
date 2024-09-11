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
                <label className="ml-4 text-2xl font-bold"> {name} </label>
                <img
                    src="/assets/images/pizzas/Амадор_885.png"
                    alt="Амадор"
                    className="w-[70%]"
                />
                <div className="absolute bottom-0 right-0">
                    {sizes.map(({ size, price }) => (
                        <div className="mb-3 mr-2 flex flex-row items-center gap-2">
                            <div className="flex flex-col font-bold 2xs:text-sm lg:text-lg">
                                <span>{size} гр.</span>
                                <span>{price / 100} лв.</span>
                            </div>
                            <button className="flex flex-row items-center justify-center border-2 border-yellow-400 bg-red-600 font-bold text-yellow-400 shadow-lg shadow-zinc-900/70 hover:text-black">
                                <Plus strokeWidth={3} className="lg:size-8" />
                                <ShoppingBasket className="2xs:size-4 lg:size-8" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <p className="mt-2 text-black"> {ingredients}</p>
        </div>
    );
}
