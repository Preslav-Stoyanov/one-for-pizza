import { getPriceInLevas } from "@/lib/utils";
import { PageProps, Pizza } from "@/types";
import { MinusCircle, PlusCircle, ShoppingBasket } from "lucide-react";
import { useState } from "react";

export function PriceCart({ pizza }: PageProps<{ pizza: Pizza }>, psize:number) {
    const [count, setCount] = useState(1);

    return (
        <div className="flex h-12 flex-row items-center justify-evenly rounded-2xl bg-white">
            <span>
                Крайна цена:{getPriceInLevas(pizza.prices[psize] * count)}
            </span>
            <MinusCircle
                onClick={() => (count > 1 ? setCount((a) => a - 1) : null)}
            />
            <span>{count}</span>{" "}
            <PlusCircle onClick={() => setCount((a) => a + 1)} />
            <ShoppingBasket />
        </div>
    );
}
