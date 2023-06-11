import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";




const EnrolledClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data: enrrolledClasses = [], isLoading: enrolleLoading } = useQuery({
        queryKey: ['enrroledClasses', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure(`/enrolled?email=${user?.email}`);
            return res.data;
        }
    });
    if (enrolleLoading) {
        return 'loading...';
    }
    return (
       
        <div>

            {
                enrrolledClasses.length <= 0 ? <div>
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
                                        <th className="p-3">Price</th>
                                        <th className="p-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        enrrolledClasses.map((item, index) => <tr key={item._id} className="bg-gray-200">
                                            <th>
                                                {
                                                    ++index
                                                }
                                            </th>
                                            <td className="p-3">
                                                <div className="ml-3">
                                                    <img src={item.class_image} className="w-12" alt="" />
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
                                                ${item?.price}
                                            </td>

                                            <td className="p-3 ">


                                                <button className="btn btn-sm btn-primary mx-2">
                                                    delete
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

export default EnrolledClass;