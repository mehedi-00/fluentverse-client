import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { PropagateLoader } from 'react-spinners';
const img_hosting_token = import.meta.env.VITE_IMG_HOSTING_TOKEN;
const AddClass = () => {
    const [submitLoading,setSubmitLoading] = useState(false)
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const onSubmit = data => {
        setSubmitLoading(true)
        const formData = new FormData();
        formData.append('image', data.image[0]);
        axios.post(img_hosting_url, formData)
            .then(response => {
                if (response.data.success) {
                    const imgURL = response.data.data.display_url;
                    const { instructor_name, instructor_email, class_name, avilable_seats, price } = data;
                    const newItem = { instructor_name, instructor_email, class_name, avilable_seats: parseInt(avilable_seats), price: parseInt(price), image: imgURL, status: "pending" };
                    axiosSecure.post('/classes', newItem)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                setSubmitLoading(false)
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                reset();
                                navigate('/dashboard/my-classes')

                            }
                        });
                }
            });




    };
    return (
        <div className="relative py-3 bg-gradient-to-br from-sky-50 to-gray-200">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-20">
                <div className="m-auto  lg:w-10/12 ">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">

                            <div className="space-y-4">
                                <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="">
                                        <div className='flex justify-between '>
                                            <div className="py-2 w-5/12">
                                                <span className="px-1 text-sm text-gray-600">Instructor name </span>
                                                <input value={user?.displayName} placeholder="" type="text" {...register("instructor_name", { required: true })}
                                                    className="text-md block px-3 py-2  rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                                {errors.instructor_name && <span className='text-red-600'>This field is required</span>}
                                            </div>
                                            <div className="py-2  w-5/12">
                                                <span className="px-1 text-sm text-gray-600">Instructor email</span>
                                                <input defaultValue={user?.email} type="email" {...register("instructor_email", { required: true })}
                                                    className="text-md block px-3 py-2  rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                                {errors.instructor_email && <span className='text-red-600'>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className='flex justify-between '>
                                            <div className="py-2 w-5/12">
                                                <span className="px-1 text-sm text-gray-600">Class name </span>
                                                <input placeholder="" type="text" {...register("class_name", { required: true })}
                                                    className="text-md block px-3 py-2  rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                                {errors.class_name && <span className='text-red-600'>This field is required</span>}
                                            </div>
                                            <div className="py-2  w-5/12">
                                                <span className="px-1 text-sm text-gray-600">Class Image</span>
                                                <input type="file" {...register("image", { required: true })}
                                                    className="text-md block px-3 py-2  rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                                {errors.image && <span className='text-red-600'>This field is required</span>}
                                            </div>
                                        </div>
                                        <div className='flex justify-between '>
                                            <div className="py-2 w-5/12">
                                                <span className="px-1 text-sm text-gray-600">Avilable Seates </span>
                                                <input type="number" {...register("avilable_seats", { required: true })}
                                                    className="text-md block px-3 py-2  rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                                {errors.avilable_seats && <span className='text-red-600'>This field is required</span>}
                                            </div>
                                            <div className="py-2  w-5/12">
                                                <span className="px-1 text-sm text-gray-600">Price</span>
                                                <input type="number" {...register("price", { required: true })}
                                                    className="text-md block px-3 py-2  rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                                {errors.price && <span className='text-red-600'>This field is required</span>}
                                            </div>
                                        </div>

                                    </div>
                                    <button className="mt-3 text-lg font-semibold 
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl text-center hover:text-white hover:bg-black mx-auto">
                                       {submitLoading? <PropagateLoader color="#36d7b7" className='py-3' /> :'Add Class'}
                                    </button>
                                </form>

                            </div>


                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default AddClass;