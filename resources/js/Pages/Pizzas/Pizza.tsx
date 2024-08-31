import { PageProps, Pizza } from "@/types";

export default function PizzaPage({ pizza }: PageProps<{ pizza: Pizza }>) {
    console.log(pizza);
    return (
        <div>
            <p>{pizza.name}</p>
            {pizza.sizes.map((size, index) => (
                <div key={index}>
                    {size} гр. - {pizza.prices[index] / 100} лв.
                </div>
            ))}
            <p>{pizza.ingredients.join(", ")}</p>
        </div>
    );
}
