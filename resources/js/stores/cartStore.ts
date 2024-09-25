import { getSizeGrams } from "@/lib/utils";
import { CartPizza } from "@/types";
import { toast } from "sonner";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
    pizzas: CartPizza[];
    setWithoutIngredients: (
        pizzaIndex: number,
        withoutIngredients: string[],
    ) => void;
    removeWithoutIngredient: (pizzaIndex: number, ingredient: string) => void;
    increaseQuantity: (pizzaIndex: number) => void;
    decreaseQuantity: (pizzaIndex: number) => void;
    addPizza: (pizza: Omit<CartPizza, "id">) => void;
    removePizza: (pizzaIndex: number) => void;
};

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            pizzas: [],
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
                        pizza.withoutIngredients =
                            pizza.withoutIngredients.filter(
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
                            (ingredient) =>
                                withoutIngredients.includes(ingredient),
                        );
                    }

                    return {
                        pizzas: [...pizzas],
                    };
                }),

            addPizza: (pizza) =>
                set((state) => {
                    const pizzas = state.pizzas;
                    const newPizza: CartPizza = {
                        id: pizzas.length,
                        ...pizza,
                    };
                    toast.success(
                        `+ ${pizza.quantity} x ${pizza.name} - ${getSizeGrams(pizza.sizes[pizza.size])}`,
                    );

                    pizzas.push(newPizza);

                    return {
                        pizzas: [...pizzas],
                    };
                }),

            removePizza: (pizzaIndex) =>
                set((state) => {
                    const pizzas = state.pizzas;
                    const pizza = pizzas[pizzaIndex];
                    pizzas.splice(pizzaIndex, 1);

                    toast.warning(
                        `- ${pizza.quantity} x ${pizza.name} - ${getSizeGrams(pizza.sizes[pizza.size])}`,
                    );

                    return {
                        pizzas: [...pizzas],
                    };
                }),
        }),
        {
            name: "cart-storage",
        },
    ),
);
