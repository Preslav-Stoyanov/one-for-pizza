import { FormEvent, useState } from "react";
import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { StripePaymentElementOptions } from "@stripe/stripe-js";

export function CheckoutForm({ orderUuid }: { orderUuid: string }) {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `http://1forpizza.test/orders/${orderUuid}`,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message!);
        } else {
            setMessage("Нещо неочаквано стана. Моля пробвайте отново.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions: StripePaymentElementOptions = {
        layout: "tabs",
        business: { name: "1ForPizza" },
    };

    return (
        <>
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement
                    id="payment-element"
                    options={paymentElementOptions}
                />
                <button
                    disabled={isLoading || !stripe || !elements}
                    id="submit"
                >
                    <span id="button-text">
                        {isLoading ? (
                            <div className="spinner" id="spinner"></div>
                        ) : (
                            "Pay now"
                        )}
                    </span>
                </button>
                {message && <div id="payment-message">{message}</div>}
            </form>
        </>
    );
}
