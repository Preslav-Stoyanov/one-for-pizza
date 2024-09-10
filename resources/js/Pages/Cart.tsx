import { CartContainer } from "@/components/cart/CartContainer";
import { CartPizza } from "@/types";
import { Head, Link, usePage } from "@inertiajs/react";
import { loadStripe } from "@stripe/stripe-js";
import { useMemo } from "react";

const initializeStripe = (key: string) => loadStripe(key);

export default function Cart() {
    const { stripePublishable } = usePage<{ stripePublishable: string }>()
        .props;
    const stripePromise = useMemo(
        () => initializeStripe(stripePublishable),
        [stripePublishable],
    );

    return (
        <>
            <div className="min-h-screen bg-zinc-50">
                <Head title="Количка" />
                <div className="block h-full w-full lg:flex">
                    <CartContainer />
                    <div className="h-full w-full">
                        <Link href="order">Поръчай</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
