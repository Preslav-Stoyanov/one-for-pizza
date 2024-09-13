import { PageProps, Pizza } from "@/types";
import { Head, usePage } from "@inertiajs/react";

export default function PizzaPage({ pizza }: PageProps<{ pizza: Pizza }>) {
    return (
        <>
            <Head title={pizza.name} />
            {/* <div>
                <p>{pizza.name}</p>
                {pizza.sizes.map((size, index) => (
                    <div key={index}>
                        {size} гр. - {pizza.prices[index] / 100} лв.
                    </div>
                ))}
                <p>{pizza.ingredients.join(", ")}</p>
            </div> */}
 

        </>
    );
}
