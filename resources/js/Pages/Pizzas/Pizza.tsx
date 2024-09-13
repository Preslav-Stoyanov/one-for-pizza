import { PageProps, Pizza } from "@/types";
import { Button } from "@/components/ui/button";
import { Head, usePage } from "@inertiajs/react";
import {
    ArrowLeft,
    MinusCircle,
    PlusCircle,
    ShoppingBasket,
    ShoppingCart,
} from "lucide-react";
import { QuantityInput } from "@/components/QuantityInput";

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

            <div className="flex flex-col gap-10 p-5 bg-wood-texture">
                <div className="">
                    <div className="flex flex-row items-center justify-between ">
                        <Button className="rounded-full">
                            <ArrowLeft></ArrowLeft>
                        </Button>
                        <h1>Name</h1>
                        <span>Gr</span>
                    </div>
                    <div className="flex w-[80%] items-center justify-center">
                        <img
                            src="/assets/images/pizzas/Амадор_885.png"
                            alt="Амадор"
                        />
                    </div>
                </div>
                <div className="flex h-12 flex-row items-center justify-evenly rounded-2xl  bg-gray-400">
                    <span>Крайна цена: 10.00</span> <PlusCircle />{" "}
                    <span>1</span> <MinusCircle /> <ShoppingBasket />
                </div>
                <div className="flex flex-col gap-6">
                    <div className="relative rounded-2xl bg-gray-400 h-28 flex flex-col justify-center items-center">
                        <div className="absolute top-0 bg-red-500 rounded-2xl w-[45%] flex items-center justify-center text-white text-2xl">
                            <span>Описание</span>
                        </div>
                        <div className="">
                        <p>dsadnasdnasldnlsakdnalks</p>
                        </div>
                    </div>
                    <div className="bg-white">opisani</div>
                    <div className="bg-white">opisani</div>
                </div>
            </div>
        </>
    );
}

//     <div className="flex h-screen items-center justify-center">
//     <div className="flex w-[100%] items-center justify-evenly space-x-4">
//         {/* Left div */}
//         <div className=" w-[30rem] space-y-10 rounded-lg">
//             <div className=" flex w-[30%] items-center justify-center space-x-2">
//                 <Button size="icon" className=" bg-red-500 rounded-full">
//                     <ArrowLeft />
//                 </Button>
//                 <span className="font-bold">Назад</span>
//             </div>
//             <div className="bg-gray-200 p-4 shadow-lg ">
//                 <div className="h-[67px] bg-no-repeat bg-red-500 bg-top  relative -top-[23px] text-center rounded-full w-[50%] ">
//                 <p className="text-2xl text-white leading-[65px] transform-none static font-normal">Описание </p>
//                 </div>
//                 <p>Left Content</p>
//             </div>
//         </div>

//         {/* Image div */}
//         <div className="rounded-lg bg-white p-4 shadow-lg">
//             <img
//                 src="/assets/images/pizzas/Амадор_885.png"
//                 alt="Амадор"
//                 className="w-[45rem]"
//             />
//         </div>
//     </div>
// </div>
