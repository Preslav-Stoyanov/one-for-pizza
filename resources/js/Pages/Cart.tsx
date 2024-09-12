import { useState } from "react";
import { Head } from "@inertiajs/react";

import { CartContainer } from "@/components/cart/CartContainer";
import { OrderDetailsForm } from "@/components/cart/OrderDetailsForm";
import { Checkout } from "@/components/modals/Checkout";

export default function Cart() {
    const [checkoutData, setCheckoutData] = useState<{
        orderUuid: string;
        clientSecret: string;
    }>();

    return (
        <>
            <div className="min-h-screen bg-zinc-50">
                <Head title="Количка" />
                <div className="flex h-full w-full flex-col items-center gap-12 p-2 xs:p-4 sm:p-8 md:p-12 xl:flex-row xl:gap-48">
                    <div className="w-full lg:w-5/6">
                        <CartContainer />
                    </div>
                    <OrderDetailsForm setCheckoutData={setCheckoutData} />
                </div>
                {checkoutData?.clientSecret && (
                    <Checkout
                        clientSecret={checkoutData.clientSecret}
                        orderUuid={checkoutData.orderUuid}
                    />
                )}
            </div>
        </>
    );
}
