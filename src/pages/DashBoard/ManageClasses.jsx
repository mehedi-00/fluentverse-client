

import useAllClass from "../../hooks/useAllClass";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ManageClasses = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [allClasses, refetch] = useAllClass();
    const [axiosSecure] = useAxiosSecure();
    const [isId, setId] = useState('');
    const handleApprove = id => {
        axiosSecure.patch(`/class-status/approve/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Status update',
                        showConfirmButton: false,
                        timer: 500
                    });
                    refetch();

                }

            });
    };
    const handleDeny = (id) => {
        setId(id);
        setIsOpen(true);
    };
    const handleFeedBack = e => {
        e.preventDefault();
        const form = e.target;
        const feedback = form.feedback.value;
        const newData = {
            feedback
        };
        axiosSecure.patch(`/class-status/deny/${isId}`, newData)
            .then(data => {
                if (data.data.modifiedCount > 0) {

                    setIsOpen(false);
                    form.reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Status update',
                        showConfirmButton: false,
                        timer: 500
                    });
                    refetch();

                }

            });


    };

    return (
        <div>
             <Helmet>
            <title>Fluent Verse | Manage Class</title>
            </Helmet>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel className='fixed w-[70vw] max-w-screen-lg top-1/3 left-1 md:left-1/2 bg-white md:-translate-x-1/2 rounded-md shadow-xl   p-8'>
                    <Dialog.Title>Give Feedback </Dialog.Title>

                    <form onSubmit={handleFeedBack} className="my-3">
                        <textarea name="feedback" placeholder="Type Here" required className="textarea textarea-bordered textarea-lg w-full max-w-lg my-3" ></textarea>
                        <input type="submit" className="myBtn px-6 py-2" value="Send" />
                    </form>


                    <button className=" absolute top-3 right-3" onClick={() => setIsOpen(false)}><FaTimes /></button>
                </Dialog.Panel>
            </Dialog>

            {
                allClasses.length === 0 ? <div>
                   <h2 className="text-center text-3xl"> please add Class</h2>
                </div> :


                 <div className="flex items-center justify-center min-h-screen p-8 md: ">
                     <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm font-light mx-5">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-2 md:px-6 py-4">#</th>
                                        <th scope="col" className="px-2 md:px-6 py-4">Image</th>
                                        <th scope="col" className="px-2 md:px-6 py-4">Class Name</th>
                                        <th scope="col" className="px-2 md:px-6 py-4">Avilable seats</th>
                                        <th scope="col" className="px-2 md:px-6 py-4">Price</th>

                                        <th scope="col" className="px-2 md:px-6 py-4">Status</th>
                                        <th scope="col" className="px-2 md:px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allClasses.map((item, index) => <tr key={item._id} 
                                        className="border-b dark:border-neutral-500">
                                            <th>
                                                {
                                                    ++index
                                                }
                                            </th>
                                            <td className="p-3">

                                                <div className="flex flex-col md:flex-row  align-items-center">
                                                    <img className="rounded-full h-12 w-12  object-cover" src={item?.image} />
                                                    <div className="ml-3">
                                                        <div className="text-zinc-700">
                                                            {item?.instructor_name}
                                                        </div>
                                                        <div className="font-medium">
                                                            {item?.instructor_email}
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-3">



                                                <div className="ml-3">
                                                    <div className=" font-bold">
                                                        {item?.class_name
                                                        }
                                                    </div>


                                                </div>
                                            </td>
                                            <td className="p-3 font-bold">
                                                {
                                                    item?.avilable_seats

                                                }
                                            </td>
                                            <td className="p-3 text-end font-bold">
                                                ${item?.price}
                                            </td>

                                            <td className="p-3">
                                                <span className="bg-green-400 text-gray-50 rounded-md px-2 ">
                                                    {
                                                        item?.status
                                                    }
                                                </span>
                                            </td>

                                            <td className="p-3 ">
                                                <button disabled={item.status !== 'pending'} onClick={()=> handleApprove(item._id)} className="btn btn-sm btn-primary mx-2 ">
                                                    Approve
                                                </button>
                                                <button  disabled={item.status !== 'pending'} onClick={() => handleDeny(item._id)} className="btn btn-sm btn-primary mx-2 my-3 ">
                                                    Deny
                                                </button>


                                            </td>
                                        </tr>)
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ManageClasses;