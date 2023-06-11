import useClasses from "../../hooks/useClasses";
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaTimes } from "react-icons/fa";

const MyClasses = () => {
    const [, myClasses, classLoading] = useClasses();
    const [isOpen, setIsOpen] = useState(false);
    const [isFeedback,setFeedback] = useState('');
    const handleFeedback =data=>{
        setFeedback(data);
        setIsOpen(true);
    }
    if (classLoading) {
        return 'loadding ....';
    }

    return (
        <div>

            {
                myClasses.length === 0 ? <div>
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
                                        <th className="p-3 text-center">Total Enrolled</th>

                                        <th className="p-3 text-center">Status</th>
                                        <th className="p-3 text-center">Feedback</th>
                                        <th className="p-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myClasses.map((item, index) => <tr key={item._id} className="bg-gray-200">
                                            <th>
                                                {
                                                    ++index
                                                }
                                            </th>
                                            <td className="p-3">



                                                <div className="ml-3">
                                                    <img src={item.image} className="w-12" alt="" />


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
                                               {item?.total_enroled||0 }
                                            </td>

                                            <td className="p-3">
                                                <span className="bg-green-400 text-gray-50 rounded-md px-2">
                                                    {
                                                        item?.status
                                                    }
                                                </span>
                                            </td>
                                            <td className="p-3 ">
                                                {
                                                    item?.feedback ? <button onClick={()=> handleFeedback(item?.feedback)} className="btn btn-sm bg-purple-500 px-2 py-1">see feddback</button> : <p>
                                                        No FeedBack
                                                    </p>
                                                }
                                            </td>
                                            <td className="p-3 ">
                                                <button className="btn btn-sm btn-primary mx-2">
                                                    Update
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

            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel  className='fixed w-96 max-w-screen-lg top-1/3 left-1/2 bg-white -translate-x-1/2 rounded-md shadow-xl p-8'>
                    <Dialog.Title className='font-bold text-2xl pb-3 border-b border-gray-600 mb-5'>Admin Feedback </Dialog.Title>

                    <p>
                        {
                                isFeedback
                        }
                    </p>

                    <button className="absolute top-3 right-3" onClick={() => setIsOpen(false)}><FaTimes /></button>
                </Dialog.Panel>
            </Dialog>

        </div>
    );
};

export default MyClasses;