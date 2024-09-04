import {cn} from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import {Link} from "@inertiajs/react";
import React from "react";
import {CarTaxiFront, Plus, ShoppingBasket, ShoppingCartIcon} from "lucide-react";

// export function FoodCard({className}:{className:string}, name:string, description:string ) {
//     return (
//         <div className={cn("rounded w-[35rem] h-[20rem] bg-wood-texture m-5", className)}>
//             <label className="ml-4 text-2xl font-bold"> {name} </label>
//             <img src="assets/images/pizzas/Амадор_885.png" alt="Амадор"/>
//             <p className="text-amber-50"> {description}</p>
//         </div>
//     )
// }

type FoodCardProps = {
    name: string;
    ingredients: string;
    sizes: {
        size: number;
        price: number;
    }[];
}

export function FoodCard({name, ingredients, sizes}: FoodCardProps) {
    return (
        <div className="rounded w-[35rem] h-[20rem] bg-wood-texture bg-cover m-5 mb-16 relative">
            <label className="ml-4 text-2xl font-bold"> {name} </label>
            <img src="/assets/images/pizzas/Амадор_885.png" alt="Амадор"/>
            <p className="text-amber-50"> {ingredients} </p>
            <div className=" absolute right-0 bottom-0   ">
                {sizes.map(({size,price}) => (
                    <div className="flex flex-row gap-2 mb-3 mr-2 items-center ">
                        <div className="font-bold flex flex-col">
                            <span>{size} гр.</span>
                            <span>{price/100} лв.</span>
                        </div>
                        <button className="shadow-lg shadow-zinc-900/70 w-[4rem] h-[2rem] bg-red-600 border-2 border-yellow-400 font-bold
                text-yellow-400 hover:text-black  flex flex-row justify-center items-center"><Plus strokeWidth={3}
                                                                                                   size={30}/><ShoppingBasket
                            strokeWidth={2.5}/></button>
                    </div>)
                )}
            </div>
        </div>
    );
}

//{sizes.map(size=> {return <div><span>{size.size} гр.</span> <span>{size.price} лв.</span></div> })}


// <div className="font-bold flex flex-col">
//     <span>a</span>
//     <span>a</span>
// </div>
// <button className="shadow-lg shadow-zinc-900/70 w-[4rem] h-[2rem] bg-red-600 border-2 border-yellow-400 font-bold
//                 text-yellow-400 hover:text-black  flex flex-row justify-center items-center"><Plus strokeWidth={3}
//                                                                                                    size={30}/><ShoppingBasket
//     strokeWidth={2.5}/></button>
// </div>


// <NavigationMenu className="bg-red-600">
//     <NavigationMenuList>
//         <NavigationMenuItem>
//             <Link href={route('profile.edit')}> <NavigationMenuTrigger className="bg-red-600 hover:bg-red-300">Item
//                 One</NavigationMenuTrigger> </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//             <a href="https://www.theodinproject.com" target="_blank" rel="noopener noreferrer">
//                 <NavigationMenuTrigger>Item Two</NavigationMenuTrigger> </a>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//             <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
//         </NavigationMenuItem>
//     </NavigationMenuList>
// </NavigationMenu>
