export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type Pizza = {
    name: string;
    sizes: Array<number>;
    prices: Array<number>;
    ingredients: Array<string>;
};

export type CartPizza = Pizza & {
    size: number;
    quantity: number;
    withoutIngredients?: Array<string>;
};

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
