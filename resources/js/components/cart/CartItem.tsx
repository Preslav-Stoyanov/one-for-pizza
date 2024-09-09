import { getPriceInLevas, getSizeGrams } from "@/lib/utils";
import { CartPizza } from "@/types";
import { QuantityInput } from "@/components/QuantityInput";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import { EditCartPizza } from "@/components/modals/EditCartPizza";

export function CartItem({ pizza }: { pizza: CartPizza }) {
    return (
        <TableRow className="relative">
            <TableCell className="hidden md:inline">
                <img
                    src="https://www.kotkata.com/storage/products/255/Портос_831.png"
                    alt={pizza.name}
                    className="h-20"
                />
            </TableCell>
            <TableCell>
                <EditCartPizza pizza={pizza} />
                <div className="xs:flex hidden flex-col gap-2">
                    {pizza.withoutIngredients?.map((ingredient, index) => (
                        <Button
                            key={index}
                            variant="link"
                            className="h-min w-min bg-transparent py-1 capitalize decoration-transparent hover:text-rose-600"
                            onClick={() =>
                                console.log(`zustand: remove ${ingredient}`)
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
            </TableCell>
            <TableCell>{getSizeGrams(pizza.sizes[pizza.size])}</TableCell>
            <TableCell>
                <QuantityInput quantity={pizza.quantity} />
            </TableCell>
            <TableCell className="text-center">
                {getPriceInLevas(pizza.prices[pizza.size] * pizza.quantity)}
            </TableCell>
        </TableRow>
    );
}
