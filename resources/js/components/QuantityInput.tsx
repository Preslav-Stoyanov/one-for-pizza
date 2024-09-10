import { MinusCircle, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useCartStore } from "@/stores/cartStore";

export function QuantityInput({
    quantity,
    pizzaIndex,
}: {
    quantity: number;
    pizzaIndex: number;
}) {
    const increase = useCartStore((state) => state.increaseQuantity);
    const decrease = useCartStore((state) => state.decreaseQuantity);

    return (
        <div className="flex items-center justify-center">
            <Button
                onClick={() => {
                    decrease(pizzaIndex);
                }}
                className="bg-transparent p-1 text-zinc-800 hover:bg-transparent hover:text-rose-600"
            >
                <MinusCircle />
            </Button>
            <h4 className="text-xl">{quantity}</h4>
            <Button
                onClick={() => {
                    increase(pizzaIndex);
                }}
                className="bg-transparent p-1 text-zinc-800 hover:bg-transparent hover:text-lime-500"
            >
                <PlusCircle />
            </Button>
        </div>
    );
}
