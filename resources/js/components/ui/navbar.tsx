import { Link } from "@inertiajs/react";

import { InfoButton } from "@/components/navbar/InfoButton";
import { Toaster } from "@/components/ui/sonner";
import { PhoneButton } from "../navbar/PhoneButton";
import { UserButton } from "../navbar/UserButton";
import { CartButton } from "../navbar/CartButton";

export function Navbar() {
    return (
        <>
            <nav className="flex h-20 w-full items-center justify-between bg-[#DE6B48] p-3">
                <div className="flex h-full w-fit items-center justify-evenly gap-3 sm:gap-10">
                    <Link href="/" className="group h-full w-fit">
                        <img
                            src="/assets/images/logo/logo.png"
                            alt="logo"
                            className="h-full transition group-hover:scale-75"
                        />
                    </Link>
                    <Link
                        href="/"
                        className="hidden text-2xl font-bold lg:block"
                    >
                        1FORPIZZA
                    </Link>
                    <CartButton />
                </div>

                <div className="flex h-full w-fit items-center justify-evenly gap-3 sm:gap-5">
                    <InfoButton />
                    <PhoneButton />
                    <UserButton />
                </div>
            </nav>
            <Toaster position="top-center" />
        </>
    );
}
