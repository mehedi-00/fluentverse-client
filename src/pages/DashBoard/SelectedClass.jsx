import Swal from "sweetalert2";
import useSelectClass from "../../hooks/useSelectClass";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const SelectedClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const [selectClass,refetch,classLoading] = useSelectClass();
    if (classLoading) {
        return 'loadding ....';
    }
    const handleDelete = id=>{
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
                .then(data=>{
                    if(data.data.deletedCount>0){
                     toast.success('Class deleted successfully')
                     refetch()
                    }
                })
            }
          })
    }

    return (
        <div>

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
                                                <Link to={`/dashboard/payment/${item._id}`} className="btn btn-sm btn-primary mx-2">
                                                    Pay
                                                </Link>
                                                <button onClick={()=>handleDelete(item._id)} className="btn btn-sm btn-primary mx-2">
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