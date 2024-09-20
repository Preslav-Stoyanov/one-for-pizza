import { Head, Link } from "@inertiajs/react";
import { PageProps, Pizza } from "@/types";

import { FoodCard } from "@/components/FoodCard";
import { Navbar } from "@/components/ui/navbar";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

type IndexProps = PageProps<{
    pizzas: {
        current_page: number;
        data: Pizza[];
        last_page: number;
    };
}>;

export default function Index({ pizzas }: IndexProps) {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <main className="bg-amber-50 p-5">
                <div className="grid grid-cols-1 justify-items-center gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {pizzas.data.map((pizza) => {
                        return (
                            <FoodCard key={pizza.id} pizza={pizza}></FoodCard> 
                        );
                    })}
                </div>
                <Pagination>
                    <PaginationContent>
                        {pizzas.current_page > 1 && (
                            <PaginationItem>
                                <PaginationPrevious
                                    href={`?page=${pizzas.current_page - 1}`}
                                />
                            </PaginationItem>
                        )}
                        {[...Array(pizzas.last_page)].map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    isActive={pizzas.current_page === index + 1}
                                    href={`/?page=${index + 1}`}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        {pizzas.current_page < pizzas.last_page && (
                            <PaginationItem>
                                <PaginationNext
                                    href={`?page=${pizzas.current_page + 1}`}
                                />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>
            </main>
        </>
    );
}




// const pizzas = [
    //     {
    //         name: "Прошуто",
    //         description:
    //             "Доматен сос, гъби- печурки/манатарки, кашоматен сос, гъби- печурки/манатарки, кашкавал, прошуто крудо, рукола ",
    //         sizes: [
    //             { size: 1400, price: 1300 },
    //             { size: 1400, price: 1300 },
    //             { size: 1400, price: 1300 },
    //         ],
    //     },
    //     {
    //         name: "Чироза",
    //         description: "Индийски сос, чоризо, кашкавал, рукола ",
    //         sizes: [{ size: 1400, price: 1300 }],
    //     },
    //     {
    //         name: "Амадор",
    //         description:
    //             "Пилешко филе, чоризо, гъби, кашкавал, прошуто крудо, рукола. ",
    //         sizes: [{ size: 1400, price: 1300 }],
    //     },
    //     {
    //         name: "Прошуто",
    //         description:
    //             "Доматен сос, гъби- печурки/манатарки, кашоматен сос, гъби- печурки/манатарки, кашкавал, прошуто крудо, рукола ",
    //         sizes: [
    //             { size: 1400, price: 1300 },
    //             { size: 1400, price: 1300 },
    //             { size: 1400, price: 1300 },
    //         ],
    //     },
    //     {
    //         name: "Чироза",
    //         description: "Индийски сос, чоризо, кашкавал, рукола ",
    //         sizes: [{ size: 1400, price: 1300 }],
    //     },
    //     {
    //         name: "Амадор",
    //         description:
    //             "Пилешко филе, чоризо, гъби, кашкавал, прошуто крудо, рукола. ",
    //         sizes: [{ size: 1400, price: 1300 }],
    //     },
    // ];