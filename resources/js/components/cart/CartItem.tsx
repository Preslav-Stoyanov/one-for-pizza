import { getPriceInLevas, getSizeGrams } from "@/lib/utils";
import { CartPizza } from "@/types";
import { QuantityInput } from "@/components/QuantityInput";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import { EditCartPizza } from "@/components/modals/EditCartPizza";
import { useCartStore } from "@/stores/cartStore";

export function CartItem({
    pizza,
    pizzaIndex,
}: {
    pizza: CartPizza;
    pizzaIndex: number;
}) {
    const removeWithoutIngredient = useCartStore(
        (state) => state.removeWithoutIngredient,
    );
    const removePizzaFromCart = useCartStore((state) => state.removePizza);

    return (
        <TableRow className="relative">
            <TableCell className="hidden md:inline">
                <img
                    src="https://www.kotkata.com/storage/products/255/Портос_831.png"
                    alt={pizza.name}
                    className="h-20"
                />
            </TableCell>
            <TableCell className="w-min">
                <div className="w-min flex-col gap-2">
                    <EditCartPizza pizza={pizza} pizzaIndex={pizzaIndex} />
                    <div className="hidden flex-col xs:flex">
                        {pizza.withoutIngredients?.map((ingredient, index) => (
                            <Button
                                key={index}
                                variant="link"
                                className="h-min w-min bg-transparent py-1 capitalize decoration-transparent hover:text-rose-600"
                                onClick={() =>
                                    removeWithoutIngredient(
                                        pizzaIndex,
                                        ingredient,
                                    )
                                }
                            >
                                - {ingredient}
                                <X
                                    size={17}
                                    className="ml-1 transition"
                                    strokeWidth={4}
                                />
                            </Button>
                        ))}
                    </div>
                </div>
            </TableCell>
            <TableCell>
                <QuantityInput
                    pizzaIndex={pizzaIndex}
                    quantity={pizza.quantity}
                />
            </TableCell>
            <TableCell className="w-28 text-center">
                {getPriceInLevas(pizza.prices[pizza.size] * pizza.quantity)}
            </TableCell>
            <TableCell className="relative">
                <div
                    className="group absolute left-1/2 top-1/2 w-min -translate-x-1/2 -translate-y-1/2 cursor-pointer p-2"
                    onClick={() => removePizzaFromCart(pizzaIndex)}
                >
                    <X className="stroke-[3.5] group-hover:text-rose-500" />
                </div>
            </TableCell>
        </TableRow>
    );
}
