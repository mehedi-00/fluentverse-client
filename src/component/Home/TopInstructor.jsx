import { useQuery } from "@tanstack/react-query";
import Container from "../share/Container";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import SectionHeading from "../share/SectionHeading";
import DataLoader from "../share/DataLoader";



const TopInstructor = () => {
    const { loading } = useAuth();
    const { data: topInstrrctors = [], isLoading: instructorLoading } = useQuery({
        queryKey: ['topInstrrctors'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`https://fluent-verse-server.vercel.app/popular-instructors`)
            return res.data;
        }

    });
    if (instructorLoading) {
        return <DataLoader/>
    }
    return (
        <div className="">
            <Container>
                <SectionHeading title='Top Instructor'/>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8 ">
                    {
                        topInstrrctors.map(item => <div key={item._id} className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs shadow-teal-500">
                            <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={item?.photoUrl} />
                            <h1 className="text-lg text-gray-700"> {item?.name} </h1>
                            <h3 className="text-sm text-gray-400 "> {item?.email} </h3>

                            <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Visit Clas</button>
                        </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default TopInstructor;