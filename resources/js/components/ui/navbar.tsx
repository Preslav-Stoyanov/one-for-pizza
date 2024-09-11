import {
    Icon,
    InfoIcon,
    PersonStanding,
    Phone,
    PhoneCallIcon,
    ShoppingBasket,
    UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { useCartStore } from "@/stores/cartStore";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavBar() {
    const pizzas = useCartStore((state) => state.pizzas);

    return (
        <div className="text-y flex h-24 min-w-full items-center bg-[#DE6B48] p-3 lg:justify-between">
            <div className="flex h-full w-full items-center justify-evenly gap-3 lg:w-auto lg:gap-6">
                <div className="group h-full w-fit">
                    <Link href="/">
                        <img
                            src="/assets/images/logo/logo1.png"
                            alt="logo"
                            className="h-14 transition group-hover:scale-75 lg:h-full"
                        />
                    </Link>
                </div>
                <Link href="/">
                    <div className="hidden text-center text-2xl font-bold lg:block">
                        1FORPIZZA
                    </div>
                </Link>
                <div className="flex items-center hover:text-white">
                    <Link href="/cart">
                        <ShoppingBasket className="size-6 lg:size-12"></ShoppingBasket>
                    </Link>
                    <span className="text-2xl font-bold">{pizzas.length}</span>
                </div>
                <Dialog>
                    <DialogTrigger>
                        <InfoIcon className="size-6 lg:size-12" />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Информация за страницата</DialogTitle>
                            <DialogDescription>
                                <ul className="list-disc">
                                    <li>
                                        За поръчки над 80лв без стойността на
                                        опаковките- доставката е БЕЗПЛАТНА.
                                    </li>
                                    <li>ТЕСКТ</li>
                                    <li>ТЕСКТ</li>
                                    <li>ТЕСКТ</li>
                                </ul>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

                <div className="flex">
                    <PhoneCallIcon className="hidden lg:block lg:size-12" />
                    <div className="ml-4 flex flex-col">
                        <span className="hidden text-white lg:block lg:text-lg">
                            {" "}
                            от 08:00 до 23:00
                        </span>
                        <span className="hidden font-sans font-bold lg:block lg:text-lg">
                            {" "}
                            0888 888888
                        </span>
                    </div>
                </div>
                <div>
                    <Dialog>
                        <DialogTrigger>
                            {" "}
                            <PhoneCallIcon className="lg:hidden" />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Телефон и работно време
                                </DialogTitle>
                                <DialogDescription>
                                    <ul>
                                        <li>от 08:00 до 23:00</li>
                                        <li>0888 888888</li>
                                    </ul>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <UserRound className="lg:hidden" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col  items-end">
                        <DropdownMenuLabel>
                            <Link href="/register">
                                <Button
                                    variant="ghost"
                                    className="text-sm hover:bg-black hover:text-white lg:m-5 lg:text-xl"
                                >
                                    Регистрация
                                </Button>
                            </Link>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel>
                            <Link href="/login">
                                <Button
                                    variant="default"
                                    className="text-sm hover:text-white lg:m-5 lg:text-xl"
                                >
                                    Вход
                                </Button>
                            </Link>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex hidden h-full items-center lg:block">
                <div className="hidden lg:block">
                    <Link href="/register">
                        <Button
                            variant="ghost"
                            className="text-sm hover:bg-black hover:text-white lg:m-5 lg:text-xl"
                        >
                            Регистрация
                        </Button>
                    </Link>

                    <Link href="/login">
                        <Button
                            variant="default"
                            className="text-sm hover:text-white lg:m-5 lg:text-xl"
                        >
                            Вход
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
