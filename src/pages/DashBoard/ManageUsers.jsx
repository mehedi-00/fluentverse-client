import axios from "axios";
import useUser from "../../hooks/useUser";


const ManageUsers = () => {
    const [refetch, allUser] = useUser();

    const handleMakeAdmin= user=>{
        axios.patch(`http://localhost:5000/user/admin/${user._id}`)
        .then(res=> {
            if(res.data.modifiedCount >0){
                refetch()
            }
        })
    }

    return (
        <div>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead className="bg-gray-800 text-gray-500">
                                <tr>
                                    <th className="p-3">#</th>
                                    <th className="p-3">User</th>
                                    <th className="p-3 text-center">Email</th>

                                    <th className="p-3 text-center">Status</th>
                                    <th className="p-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUser.map((item, index) => <tr key={item._id} className="bg-gray-800">
                                        <th>
                                            {
                                                ++index
                                            }
                                        </th>
                                        <td className="p-3">

                                            <div className="flex align-items-center">
                                                <img className="rounded-full h-12 w-12  object-cover" src={item?.photoUrl} />
                                                <div className="ml-3">
                                                    <div className="">
                                                        {item?.name}
                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            {
                                                item?.email
                                            }
                                        </td>

                                        <td className="p-3">
                                            <span className="bg-green-400 text-gray-50 rounded-md px-2">
                                                {
                                                    item?.role
                                                }
                                            </span>
                                        </td>
                                        <td className="p-3 ">
                                            <button  className="btn btn-sm btn-primary mx-2">Make instructor</button>
                                            <button onClick={()=>handleMakeAdmin(item)} className="btn btn-sm btn-primary">Make Admin</button>
                                        </td>
                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageUsers;