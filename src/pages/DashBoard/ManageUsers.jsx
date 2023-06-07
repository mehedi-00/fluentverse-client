import useUser from "../../hooks/useUser";


const ManageUsers = () => {
    const [refetch, allUser] = useUser();

    console.log(allUser);
    return (
        <div>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead className="bg-gray-800 text-gray-500">
                                <tr>
                                    <th className="p-3">#</th>
                                    <th className="p-3">Brand</th>
                                    <th className="p-3 text-left">Email</th>

                                    <th className="p-3 text-left">Status</th>
                                    <th className="p-3 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUser.map((item,index) => <tr key={item._id} className="bg-gray-800">
                                        <th>
                                            {
                                                ++ index
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
                                            <a href="#" className="text-gray-400 hover:text-gray-100 mr-2">
                                                <i className="material-icons-outlined text-base">visibility</i>
                                            </a>
                                            <a href="#" className="text-gray-400 hover:text-gray-100  mx-2">
                                                <i className="material-icons-outlined text-base">edit</i>
                                            </a>
                                            <a href="#" className="text-gray-400 hover:text-gray-100  ml-2">
                                                <i className="material-icons-round text-base">delete_outline</i>
                                            </a>
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