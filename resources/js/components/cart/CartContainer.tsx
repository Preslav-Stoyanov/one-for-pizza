import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CartPizza } from "@/types";

import { CartItem } from "@/components/cart/CartItem";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useCartStore } from "@/stores/cartStore";
import { getPriceInLevas } from "@/lib/utils";

export function CartContainer() {
    const md = useMediaQuery(768);
    const pizzas = useCartStore((state) => state.pizzas);

    return (
        <Table className="shadow">
            <TableHeader>
                <TableRow>
                    <TableHead colSpan={md ? 2 : 1} className="text-center">
                        Продукт
                    </TableHead>
                    <TableHead className="text-center">Брой</TableHead>
                    <TableHead className="text-center">Цена</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {pizzas.map((pizza, index) => (
                    <CartItem key={index} pizza={pizza} pizzaIndex={index} />
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={md ? 4 : 3} className="text-right">
                        Поръчка:{" "}
                        {getPriceInLevas(
                            pizzas.reduce(
                                (total, pizza) =>
                                    total +
                                    pizza.prices[pizza.size] * pizza.quantity,
                                0,
                            ),
                        )}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
