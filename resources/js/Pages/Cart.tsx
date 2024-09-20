import { useState } from "react";
import { Head } from "@inertiajs/react";

import { CartTable } from "@/components/cart/CartTable";
import { OrderDetailsForm } from "@/components/cart/OrderDetailsForm";
import { Checkout } from "@/components/modals/Checkout";
import { Navbar } from "@/components/ui/navbar";
import { useCartStore } from "@/stores/cartStore";
import { Ribbon } from "@/components/Ribbon";

export default function Cart() {
    const pizzas = useCartStore((state) => state.pizzas);
    const [checkoutData, setCheckoutData] = useState<{
        orderUuid: string;
        clientSecret: string;
    }>();

    return (
        <>
            <Head title="Количка" />
            <Navbar />
            <div className="min-h-screen bg-amber-50">
                {pizzas.length > 0 ? (
                    <>
                        <div className="flex h-full w-full flex-col items-center justify-between gap-16 py-4 sm:p-8 md:p-12 xl:flex-row xl:gap-48 2xl:gap-0">
                            <div className="w-full grow xs:w-auto 2xl:w-1/2 2xl:grow-0">
                                <Ribbon className="mx-auto mb-3">
                                    Количка
                                </Ribbon>
                                <CartTable />
                            </div>
                            <OrderDetailsForm
                                setCheckoutData={setCheckoutData}
                            />
                        </div>
                        {checkoutData?.clientSecret && (
                            <Checkout
                                clientSecret={checkoutData.clientSecret}
                                orderUuid={checkoutData.orderUuid}
                            />
                        )}
                    </>
                ) : (
                    <div className="flex flex-col items-center gap-4 p-4">
                        <Ribbon>Количка</Ribbon>
                        <div className="w-full max-w-screen-md rounded bg-amber-100/50 py-4 text-center shadow-md">
                            Количката ви е празна
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
