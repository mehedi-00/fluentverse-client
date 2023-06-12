import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import DataLoader from "../../component/share/DataLoader";
import { Helmet } from "react-helmet";



const PaymnetHistory = () => {

    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data: paymentClass = [], isLoading: paymnetLoading } = useQuery({
        queryKey: ['paymentClass', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure(`/payment-history?email=${user?.email}`);
            return res.data;
        }
    });
    if (paymnetLoading) {
        return <DataLoader/>;
    }
    console.log(paymentClass);
    return (
        <div>
             <Helmet>
            <title>Fluent Verse | Payment History</title>
            </Helmet>
            {
                paymentClass.length <= 0 ? <div>
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
                                        <th className="p-3">Payment Date</th>
                                        <th className="p-3">Price</th>
                                        <th className="p-3 ">Transion Id</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        paymentClass.map((item, index) => <tr key={item._id} className="bg-gray-200">
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
                                            <td className="p-3 text-left">
                                                {new Date(item.date).toLocaleDateString('en-GB')} {new Date(item.date).toLocaleTimeString()}
                                            </td>
                                            <td className="p-3">
                                                ${item?.price}
                                            </td>

                                            <td className="p-3 ">


                                                {item.transactionId
}

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
    )
};

export default PaymnetHistory;