import { usePage } from "@inertiajs/react";
import {
    Elements,
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { FormEvent, useMemo } from "react";

const initializeStripe = (key: string) => loadStripe(key);

export default function CartPage() {
    const { stripePublishable } = usePage<{ stripePublishable: string }>()
        .props;
    const options: StripeElementsOptions = {
        clientSecret:
            "pi_3Puub5BO9KrCyaUo4yFf5M8N_secret_6JBwA80qtUj3Kskasi7DhMyQP",
        locale: "bg",
    };

    const stripePromise = useMemo(
        () => initializeStripe(stripePublishable),
        [stripePublishable]
    );

    return (
        <Elements stripe={stripePromise} options={options}>
            <Form />
        </Elements>
    );
}

function Form() {
    const stripe = useStripe();
    const elements = useElements();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const { error } = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: "https://example.com/order/123/complete",
            },
        });

        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            console.log(error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button>Submit</button>
        </form>
    );
}
