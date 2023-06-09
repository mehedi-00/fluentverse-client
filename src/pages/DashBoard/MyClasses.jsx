import useClasses from "../../hooks/useClasses";

const MyClasses = () => {
    const [, myClasses, classLoading] = useClasses();

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
                                                    <div className="">
                                                        {item?.class_name
                                                        }
                                                    </div>


                                                </div>
                                            </td>
                                            <td className="p-3">
                                                0
                                            </td>

                                            <td className="p-3">
                                                <span className="bg-green-400 text-gray-50 rounded-md px-2">
                                                    {
                                                        item?.status
                                                    }
                                                </span>
                                            </td>
                                            <td className="p-3 ">
                                                <p>
                                                    No FeedBack
                                                </p>
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

        </div>
    );
};

export default MyClasses;