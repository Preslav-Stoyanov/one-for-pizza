import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {FoodCard} from "@/components/ui/food-card"
import {Head, Link} from "@inertiajs/react";
import React from "react";

export default function Index()
{
    const pizzas = [
        {name:"Прошуто", description:"Доматен сос, гъби- печурки/манатарки, кашоматен сос, гъби- печурки/манатарки, кашкавал, прошуто крудо, рукола ", sizes:[{size:1400, price:1300 }, {size:1400, price:1300 },{size:1400, price:1300 }]},
        {name:"Чироза", description:"Индийски сос, чоризо, кашкавал, рукола ", sizes:[{size:1400, price:1300 }]},
        {name:"Амадор", description:"Пилешко филе, чоризо, гъби, кашкавал, прошуто крудо, рукола. ", sizes:[{size:1400, price:1300 }]},
        {name:"Прошуто", description:"Доматен сос, гъби- печурки/манатарки, кашоматен сос, гъби- печурки/манатарки, кашкавал, прошуто крудо, рукола ", sizes:[{size:1400, price:1300 }, {size:1400, price:1300 },{size:1400, price:1300 }]},
        {name:"Чироза", description:"Индийски сос, чоризо, кашкавал, рукола ", sizes:[{size:1400, price:1300 }]},
        {name:"Амадор", description:"Пилешко филе, чоризо, гъби, кашкавал, прошуто крудо, рукола. ", sizes:[{size:1400, price:1300 }]},

    ];
    return <div className="bg-zinc-700 min-h-screen p-5">
        <Head title="Test"/>
        <br/><br/><br/><br/><br/><br/>
        <div className="grid grid-cols-3 gap-1 justify-items-center">
            {pizzas.map((pizza) => {
                return <FoodCard name={pizza.name} ingredients={pizza.description} sizes={pizza.sizes}></FoodCard>
            })}
        </div>
    </div>
}
