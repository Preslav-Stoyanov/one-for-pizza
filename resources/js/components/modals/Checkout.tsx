import { useMemo } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { usePage } from "@inertiajs/react";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../cart/CheckoutForm";

type CheckoutProps = {
    clientSecret: string;
    orderUuid: string;
};

const initializeStripe = (key: string) => loadStripe(key);

export function Checkout({ clientSecret, orderUuid }: CheckoutProps) {
    const { stripePublishable } = usePage<{ stripePublishable: string }>()
        .props;
    const stripePromise = useMemo(
        async () => await initializeStripe(stripePublishable),
        [stripePublishable],
    );
    const options: StripeElementsOptions = {
        clientSecret,
        locale: "bg",
    };

    return (
        <Dialog open={true}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Плащане</DialogTitle>
                    <DialogDescription>Плащане с карта</DialogDescription>
                </DialogHeader>
                {clientSecret && stripePromise && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm orderUuid={orderUuid} />
                    </Elements>
                )}
            </DialogContent>
        </Dialog>
    );
}
