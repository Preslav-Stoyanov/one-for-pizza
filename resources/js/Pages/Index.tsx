import { FoodCard } from "@/components/ui/food-card";
import { Navbar } from "@/components/ui/navbar";
import { PageProps, Pizza } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({ pizzas }: PageProps<{ pizzas: Pizza[] }>) {
    return (
        <div className="min-h-screen bg-amber-50">
            <Head title="Test" />
            <Navbar />
            <div className="grid grid-cols-1 justify-items-center gap-x-10 gap-y-10 p-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {pizzas.map((pizza) => {
                    return <FoodCard key={pizza.id} pizza={pizza}></FoodCard>;
                })}
            </div>
        </div>
    );
}
