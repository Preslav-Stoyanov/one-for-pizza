import { useCartStore } from "@/stores/cartStore";
import { Link } from "@inertiajs/react";
import { ShoppingBasket } from "lucide-react";

export function CartButton() {
    const pizzas = useCartStore((state) => state.pizzas);

    return (
        <Link href="/cart" className="flex h-full items-center gap-1">
            <ShoppingBasket className="h-[3.35rem] w-auto stroke-[1.3]" />
            <span className="text-xl font-semibold">{pizzas.length}</span>
        </Link>
    );
}
