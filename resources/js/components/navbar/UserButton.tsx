import { Link } from "@inertiajs/react";

import { UserRound } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function UserButton() {
    const md = useMediaQuery(768);

    return (
        <>
            {md ? (
                <div className="flex gap-2">
                    <Link href="/register">
                        <Button
                            variant="ghost"
                            className="text-sm hover:bg-black hover:text-white"
                        >
                            Регистрация
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button
                            variant="default"
                            className="text-sm hover:text-white"
                        >
                            Вход
                        </Button>
                    </Link>
                </div>
            ) : (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <UserRound className="h-[2rem] w-auto stroke-[1.75] xs:h-[2.65rem]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col items-end">
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
            )}
        </>
    );
}
