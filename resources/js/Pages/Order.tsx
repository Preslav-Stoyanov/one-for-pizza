import { PageProps } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useMemo } from "react";

const initializeStripe = (key: string) => loadStripe(key);

export default function Order({
    clientSecret,
}: PageProps<{ clientSecret: string }>) {
    const { stripePublishable } = usePage<{ stripePublishable: string }>()
        .props;
    const stripePromise = useMemo(
        () => initializeStripe(stripePublishable),
        [stripePublishable],
    );

    return (
        <>
            <Head title="Плащане" />
            {clientSecret && <Elements stripe={stripePromise} />}
        </>
    );
}
