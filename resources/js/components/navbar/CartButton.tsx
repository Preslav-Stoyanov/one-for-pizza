import { useCartStore } from "@/stores/cartStore";
import { Link } from "@inertiajs/react";
import { ShoppingBasket } from "lucide-react";

export function CartButton() {
    const pizzas = useCartStore((state) => state.pizzas);

    return (
        <Link href="/cart" className="flex h-full items-center gap-1">
            <ShoppingBasket className="h-[2.4rem] w-auto stroke-[1] xs:h-[3.35rem] xs:stroke-[1.3]" />
            <span className="text-xl font-medium xs:font-semibold">
                {pizzas.length}
            </span>
        </Link>
    );
}
