import { getPriceInLevas, getSizeGrams } from "@/lib/utils";
import { CartPizza } from "@/types";
import { QuantityInput } from "../QuantityInput";
import { Button } from "@/components/ui/button";
import { Pencil, X } from "lucide-react";

export function CartItem({ pizza }: { pizza: CartPizza }) {
    return (
        <tr className="relative">
            <td className="hidden md:inline">
                <img
                    src="https://www.kotkata.com/storage/products/255/Портос_831.png"
                    alt={pizza.name}
                    className="h-20"
                />
            </td>
            <td>
                <Button
                    variant="link"
                    className="group text-lg font-medium"
                    onClick={() =>
                        console.log("open modal to edit this pizza ingredients")
                    }
                >
                    {pizza.name}
                    <Pencil className="hidden group-hover:inline" size={20} />
                </Button>
                <div className="flex flex-col gap-2">
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
            </td>
            <td>{getSizeGrams(pizza.sizes[pizza.size])}</td>
            <td>
                <QuantityInput quantity={pizza.quantity} />
            </td>
            <td className="text-center">
                {getPriceInLevas(pizza.prices[pizza.size] * pizza.quantity)}
            </td>
        </tr>
    );
}
