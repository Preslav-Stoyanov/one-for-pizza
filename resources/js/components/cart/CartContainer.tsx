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

export function CartContainer({ pizzas }: { pizzas: CartPizza[] }) {
    const md = useMediaQuery(768);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead colSpan={md ? 3 : 2} className="text-center">
                        Продукт
                    </TableHead>
                    <TableHead className="text-center">Брой</TableHead>
                    <TableHead className="text-center">Цена</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {pizzas.map((pizza, index) => (
                    <CartItem key={index} pizza={pizza} />
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={md ? 5 : 4} className="text-right">
                        Поръчка: 68.70 лв.
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
