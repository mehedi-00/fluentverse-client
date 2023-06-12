import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import Container from "../share/Container";
import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../share/SectionHeading";
import DataLoader from "../share/DataLoader";



const PopularClasses = () => {
    const { loading } = useAuth();
    const { data: popularClass = [], isLoading: popularClassLoading } = useQuery({
        queryKey: ['popularClass'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`https://fluent-verse-server.vercel.app/popular-clsases`)
            return res.data;
        }

    });
    if (popularClassLoading) {
        return <DataLoader/>
    }
    return (
        <div className="">
            <Container>
              <SectionHeading title='Popular Classes'/>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8 ">
                    {
                        popularClass.map(item => <div key={item._id} className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  shadow-black">
                        <div className="relative mx-4 mt-4 h-64 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                          <img
                            src={item.image}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="py-8 px-6">
                          <div className="mb-4 flex items-center justify-between">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                              {item?.class_name}
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                              ${item?.price}
                            </p>
                          </div>
                  
                          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Instructor: {item?.instructor_name}
                          </p>
                          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Email: {item?.instructor_email}
                          </p>
                          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Available seats: {item?.avilable_seats}
                          </p>
                  
                  
                        </div>
                        <div className="p-6 pt-0 mx-auto">
                          <button
                           
                            className=" btn btn-primary"
                          >
                            Select
                          </button>
                        </div>
                      </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default PopularClasses;