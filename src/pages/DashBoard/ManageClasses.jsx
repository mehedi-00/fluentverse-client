

import useAllClass from "../../hooks/useAllClass";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

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
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel className='fixed max-w-screen-lg top-1/3 left-1/2 bg-white -translate-x-1/2 rounded-md shadow-xl p-8'>
                    <Dialog.Title>Give Feedback </Dialog.Title>

                    <form onSubmit={handleFeedBack} className="my-3">
                        <textarea name="feedback" placeholder="Type Here" required className="textarea textarea-bordered textarea-lg w-full max-w-lg my-3" ></textarea>
                        <input type="submit" className="btn btn-md btn-outline btn-primary" value="Send" />
                    </form>


                    <button className="absolute top-3 right-3" onClick={() => setIsOpen(false)}><FaTimes /></button>
                </Dialog.Panel>
            </Dialog>

            {
                allClasses.length === 0 ? <div>
                    please add Class
                </div> : <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="col-span-12">
                        <div className="overflow-auto lg:overflow-visible ">
                            <table className="table text-gray-400 border-separate space-y-6 text-sm">
                                <thead className="bg-gray-800 text-gray-500">
                                    <tr>
                                        <th className="p-3">#</th>
                                        <th className="p-3">Image</th>
                                        <th className="p-3">Class Name</th>
                                        <th className="p-3 text-center">Avilable seats</th>
                                        <th className="p-3 text-center">Price</th>

                                        <th className="p-3 text-center">Status</th>
                                        <th className="p-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allClasses.map((item, index) => <tr key={item._id} className="bg-gray-200">
                                            <th>
                                                {
                                                    ++index
                                                }
                                            </th>
                                            <td className="p-3">

                                                <div className="flex align-items-center">
                                                    <img className="rounded-full h-12 w-12  object-cover" src={item?.image} />
                                                    <div className="ml-3">
                                                        <div className="">
                                                            {item?.instructor_name}
                                                        </div>
                                                        <div className="">
                                                            {item?.instructor_email}
                                                        </div>

                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-3">



                                                <div className="ml-3">
                                                    <div className="">
                                                        {item?.class_name
                                                        }
                                                    </div>


                                                </div>
                                            </td>
                                            <td className="p-3">
                                                {
                                                    item?.avilable_seats

                                                }
                                            </td>
                                            <td className="p-3 text-end">
                                                ${item?.price}
                                            </td>

                                            <td className="p-3">
                                                <span className="bg-green-400 text-gray-50 rounded-md px-2">
                                                    {
                                                        item?.status
                                                    }
                                                </span>
                                            </td>

                                            <td className="p-3 ">
                                                <button disabled={item.status !== 'pending'} onClick={()=> handleApprove(item._id)} className="btn btn-sm btn-primary mx-2">
                                                    Approve
                                                </button>
                                                <button  disabled={item.status !== 'pending'} onClick={() => handleDeny(item._id)} className="btn btn-sm btn-primary mx-2">
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