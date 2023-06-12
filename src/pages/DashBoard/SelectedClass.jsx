import Swal from "sweetalert2";
import useSelectClass from "../../hooks/useSelectClass";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAllClass from "../../hooks/useAllClass";
import DataLoader from "../../component/share/DataLoader";
import { Helmet } from "react-helmet";

const SelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const [selectClass, refetch, classLoading] = useSelectClass();
    const [allClasses] = useAllClass();
    const naviagte = useNavigate()
    if (classLoading) {
        return <DataLoader/>;
    }
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/select-class/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            toast.success('Class deleted successfully');
                            refetch();
                        }
                    });
            }
        });
    };
    const handlePayment = (id,class_id) => {
        const checkClasses = allClasses.find(item => item._id === class_id);
        if (checkClasses.avilable_seats <= 0) {
            toast.success('This Class Seat not avilable');
        }else{
            naviagte(`/dashboard/payment/${id}`)
        }
        
    };

    return (
        <div>
             <Helmet>
            <title>Fluent Verse | Selected Class</title>
            </Helmet>

            {
                selectClass.length === 0 ? <div>
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
                                        selectClass.map((item, index) => <tr key={item._id} className="bg-gray-200">
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
                                                <button onClick={() => handlePayment(item._id,item.class_id)} className="btn btn-sm btn-primary mx-2">
                                                    Pay
                                                </button>
                                               
                                                <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-primary mx-2">
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

export default SelectedClass;