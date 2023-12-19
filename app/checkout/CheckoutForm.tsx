'use client';

import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/utils/formatPrice';
import { useStripe, useElements, PaymentElement, AddressElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Heading from '../components/Heading';
import Button from '../components/Button';

interface CheckoutFormProps {
    clientSecret: string;
    handleSetPaymentSuccess: (value: boolean) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ clientSecret, handleSetPaymentSuccess }) => {
    const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } = useCart();
    const stripe = useStripe();
    const elements = useElements();
    const [isLoading, setIsLoding] = useState(false);
    const formattedPrice = formatPrice(cartTotalAmount);

    useEffect(() => {
        if (!stripe) {
            return;
        }
        if (!clientSecret) {
            return;
        }
        handleSetPaymentSuccess(false);
    }, [stripe]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoding(true);

        stripe.confirmPayment({ elements, redirect: 'if_required' }).then((result) => {
            if (!result.error) {
                toast.success('Checkout Success');

                handleClearCart();
                handleSetPaymentSuccess(true);
                handleSetPaymentIntent(null);
            }

            setIsLoding(false);
        });
    };

    return (
        <form onSubmit={handleSubmit} id="payment-form">
            <div className="mb-6">
                <Heading title="Enter your details to complete checkout" />
            </div>
            <h2 className="mb-2 font-semibold">Address Information</h2>
            <AddressElement options={{ mode: 'shipping', allowedCountries: ['US', 'KE'] }} />
            <h2 className="mt-4 mb-2 font-semibold">Payment Information</h2>
            <PaymentElement id="payment-element" options={{ layout: 'tabs' }} />
            <div className="py-4 text-xl font-bold text-center text-slate-700">Total:{formattedPrice}</div>
            <Button
                label={isLoading ? 'Processing' : 'Pay now'}
                disabled={isLoading || !stripe || !elements}
                onClick={() => {}}
            />
        </form>
    );
};

export default CheckoutForm;
