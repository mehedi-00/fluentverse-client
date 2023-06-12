import useUser from "../../hooks/useUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";


const ManageUsers = () => {
    const [refetch, allUser] = useUser();
    const [axiosSecure] = useAxiosSecure();
    const handleMakeAdmin = (user, role) => {
        axiosSecure.patch(`/user/admin/${user._id}/?role=${role}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    toast.success('successfully role updated');
                }
            });
    };

    return (


        <div className=" mt-10">
            <Helmet>
                <title>Fluent Verse | Manage Users</title>
            </Helmet>
            <h2 className="text-3xl text-center"> All User</h2>
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm font-light mx-5">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="px-2 md:px-6 py-4">#</th>
                                    <th scope="col" className="px-2 md:px-6 py-4">User</th>
                                    <th scope="col" className="px-2 md:px-6 py-4">Email</th>
                                    <th scope="col" className="px-2 md:px-6 py-4">Status</th>
                                    <th scope="col" className="px-2 md:px-6 py-4">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUser.map((item, index) => <tr
                                        key={item._id}
                                        className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                                            {
                                                ++index
                                            }
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <div className="flex align-items-center">
                                                <img className="rounded-full h-12 w-12  object-cover" src={item?.photoUrl} />
                                                <div className="ml-3">
                                                    <div className="">
                                                        {item?.name}
                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            {
                                                item?.email
                                            }
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <span className="bg-green-400 text-gray-50 rounded-md px-2">
                                                {
                                                    item?.role
                                                }
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4">
                                            <button disabled={item.role === 'admin' || item.role === 'instructor'} onClick={() => handleMakeAdmin(item, 'instructor')} className="btn btn-sm btn-primary mx-2">Make instructor</button>
                                            <button disabled={item.role === 'admin' || item.role === 'instructor'} onClick={() => handleMakeAdmin(item, 'admin')} className="btn btn-sm btn-primary">Make Admin</button>
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