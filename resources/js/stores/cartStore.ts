import { CartPizza } from "@/types";
import { create } from "zustand";

type CartState = {
    pizzas: CartPizza[];
    setWithoutIngredients: (
        pizzaIndex: number,
        withoutIngredients: string[],
    ) => void;
    removeWithoutIngredient: (pizzaIndex: number, ingredient: string) => void;
    increaseQuantity: (pizzaIndex: number) => void;
    decreaseQuantity: (pizzaIndex: number) => void;
    addPizza?: (pizza: CartPizza) => void;
    removePizza?: (pizzaIndex: number) => void;
};

export const useCartStore = create<CartState>()((set) => ({
    pizzas: [
        {
            id: 1,
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
            id: 2,
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
            withoutIngredients: [],
        },
    ],
    increaseQuantity: (pizzaIndex) =>
        set((state) => {
            const pizzas = state.pizzas;
            const pizza = pizzas[pizzaIndex];
            if (pizza && pizza.quantity < 32) pizza.quantity++;

            return {
                pizzas: [...pizzas],
            };
        }),

    decreaseQuantity: (pizzaIndex) =>
        set((state) => {
            const pizzas = state.pizzas;
            const pizza = pizzas[pizzaIndex];
            if (pizza && pizza.quantity > 1) pizza.quantity--;

            return {
                pizzas: [...pizzas],
            };
        }),

    removeWithoutIngredient: (pizzaIndex, ingredient) =>
        set((state) => {
            const pizzas = state.pizzas;
            const pizza = pizzas[pizzaIndex];
            if (pizza && pizza.withoutIngredients) {
                pizza.withoutIngredients = pizza.withoutIngredients.filter(
                    (i) => i !== ingredient,
                );
            }

            return {
                pizzas: [...pizzas],
            };
        }),

    setWithoutIngredients: (pizzaIndex, withoutIngredients) =>
        set((state) => {
            const pizzas = state.pizzas;
            const pizza = pizzas[pizzaIndex];
            if (pizza) {
                pizza.withoutIngredients = pizza.ingredients.filter(
                    (ingredient) => withoutIngredients.includes(ingredient),
                );
            }

            return {
                pizzas: [...pizzas],
            };
        }),
}));
