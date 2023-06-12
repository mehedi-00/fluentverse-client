
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './CheckoutForm.css'


const CheckoutForm = ({ currentClass, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [cardError, setcardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const { _id, price, class_image, class_id, class_name,
    } = currentClass;
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                });
        }
    }, [price, axiosSecure]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) return;

        const card = elements.getElement(CardElement);
        if (card === null) return;

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setcardError(error.message);
        } else {
            setcardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save server
            const payment = {
                select_class_id: _id,
                student_email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                class_image,
                class_id,
                class_name
            };
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        // display confirm
                        toast.success('Payment successfully');
                        refetch();
                        navigate('/dashboard/selected-class');
                    }
                });
        }

    };




    return (
        <>
            <form onSubmit={handleSubmit} className='max-w-screen-md mx-auto shadow-xl mt-[200px] p-8'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn btn-md btn-primary mt-4'>
                    Pay
                </button>
            </form>

            {
                cardError && <p className='text-red-600 my-5'>
                    {cardError}
                </p>
            }
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;