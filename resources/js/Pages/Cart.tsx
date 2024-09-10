import { CartContainer } from "@/components/cart/CartContainer";
import { OrderDetailsForm } from "@/components/cart/OrderDetailsForm";
import { Head, usePage } from "@inertiajs/react";
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
                <div className="flex h-full w-full flex-col items-center gap-12 p-2 xs:p-4 sm:p-8 md:p-12 xl:flex-row xl:gap-48">
                    <div className="w-full lg:w-5/6">
                        <CartContainer />
                    </div>
                    <OrderDetailsForm />
                </div>
            </div>
        </>
    );
}
