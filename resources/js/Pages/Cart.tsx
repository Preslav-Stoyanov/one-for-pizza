import { CartContainer } from "@/components/cart/CartContainer";
import { CartPizza } from "@/types";

export default function Cart() {
    const pizzas: CartPizza[] = [
        {
            name: "Асорти",
            sizes: [400, 600, 1500],
            prices: [1020, 1740, 3170],
            size: 0,
            quantity: 2,
            ingredients: [
                "доматен сос",
                "луканка",
                "шунка",
                "бекон",
                "гъби",
                "маслини",
                "кисели краставици",
                "печен пипер",
                "кашкавал",
                "топено сирене",
            ],
            withoutIngredients: [
                "бекон",
                "гъби",
                "маслини",
                "кисели краставици",
            ],
        },
        {
            name: "Божинов",
            sizes: [300, 500, 1300],
            prices: [930, 1520, 2750],
            size: 2,
            quantity: 1,
            ingredients: [
                "сметана",
                "свинска шунка",
                "пушена пилешка шунка",
                "печен пипер",
                "кашкавал",
            ],
        },
    ];

    return <CartContainer pizzas={pizzas} />;
}
