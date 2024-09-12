import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { editCartPizzaSchema } from "@/schemas/pizzaSchemas";
import { CartPizza } from "@/types";

import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { cn, getPriceInLevas, getSizeGrams } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";
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
