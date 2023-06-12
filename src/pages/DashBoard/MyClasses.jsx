import useClasses from "../../hooks/useClasses";
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { FaTimes } from "react-icons/fa";
import DataLoader from "../../component/share/DataLoader";

const MyClasses = () => {
    const [, myClasses, classLoading] = useClasses();
    const [isOpen, setIsOpen] = useState(false);
    const [isFeedback,setFeedback] = useState('');
    const handleFeedback =data=>{
        setFeedback(data);
        setIsOpen(true);
    }
    if (classLoading) {
        return <DataLoader/>;
    }

    return (
        <div>

            {
                myClasses.length === 0 ? <div>
                    please add Class
                </div> : <div className=" mx-5">
                <h2 className="text-3xl text-center my-3 mb-8"> My Class</h2>

                    <div className="col-span-12">
                        <div className="overflow-auto lg:overflow-visible ">
                            <table className="table text-gray-400 border-separate space-y-6 text-sm">
                                <thead className="bg-gray-300 text-gray-500">
                                    <tr>
                                        <th scope="col" className="px-2 md:px-6 py-4">#</th>
                                        <th scope="col" className="px-2 md:px-6 py-4">Image</th>
                                        <th scope="col" className="px-2 md:px-6 py-4">Class Name</th>
                                        <th scope="col" className="px-2 md:px-6 py-4">Total Enrolled</th>

                                        <th scope="col" className="px-2 md:px-6 py-4">Status</th>
                                        <th scope="col" className="px-2 md:px-6 py-4">Feedback</th>
                                        <th scope="col" className="px-2 md:px-6 py-4">Action</th>
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