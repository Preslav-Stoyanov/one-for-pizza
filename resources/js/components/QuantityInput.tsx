import { MinusCircle, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useCartStore } from "@/stores/cartStore";

export function QuantityInput({
    quantity,
    increase,
    decrease,
}: {
    quantity: number;
    increase: () => void;
    decrease: () => void;
}) {
    return (
        <div className="flex items-center justify-center">
            <Button
                onClick={decrease}
                className="bg-transparent p-1 text-zinc-800 hover:bg-transparent hover:text-rose-500"
            >
                <MinusCircle />
            </Button>
            <h4 className="w-6 text-center text-xl">{quantity}</h4>
            <Button
                onClick={increase}
                className="bg-transparent p-1 text-zinc-800 hover:bg-transparent hover:text-lime-500"
            >
                <PlusCircle />
            </Button>
        </div>
    );
}
