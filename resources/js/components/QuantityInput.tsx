import { MinusCircle, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";

export function QuantityInput({ quantity }: { quantity: number }) {
    return (
        <div className="flex items-center justify-center">
            <Button
                onClick={() => console.log("zustand", quantity - 1)}
                className="bg-transparent p-1 text-zinc-800 hover:bg-transparent hover:text-rose-600"
            >
                <MinusCircle />
            </Button>
            <h4 className="text-xl">{quantity}</h4>
            <Button
                onClick={() => console.log("zustand", quantity + 1)}
                className="bg-transparent p-1 text-zinc-800 hover:bg-transparent hover:text-emerald-600"
            >
                <PlusCircle />
            </Button>
        </div>
    );
}
