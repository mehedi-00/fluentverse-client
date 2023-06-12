import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useSelectClass from "../../../hooks/useSelectClass";
import { useEffect, useState } from "react";
const stripepromise = loadStripe(import.meta.env.VITE_STRIPE_PUSBLISH_KEY);

const Payment = () => {
    const { id } = useParams();
    const [selectClass, refetch, classLoading] = useSelectClass();
    const [currentClass, setCurrentClass] = useState(null);
    
    useEffect(() => {
        const remaingClass = selectClass.find(item => item._id === id);
        return setCurrentClass(remaingClass);
    }, [id,selectClass]);
    if(classLoading){
        return 'loading...'
    }
    // const {price} = currentClass
    console.log(currentClass);
    return (
       
        <div className="  max-w-screen-lg max-h-screen   ">

        {
            currentClass&&  <Elements stripe={stripepromise}>
            <CheckoutForm currentClass={currentClass} refetch={refetch} />
        </Elements>

        }
           
        </div>
    );
};

export default Payment;