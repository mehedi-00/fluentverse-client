import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import Container from "../../component/share/Container";
import SingleClass from "../../component/Classes/SingleClass";
import Loader from "../../component/share/Loader";
import SectionHeading from "../../component/share/SectionHeading";
import { Helmet } from "react-helmet";



const Classes = () => {
    const { loading } = useAuth();
    const { data: approvedClasses = [],isLoading:classLoading } = useQuery({
        queryKey: ['approvedClasses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_SERVER_URL}/approved-classes`);
            return res.data;
        }
    });
    if( classLoading){
        return <Loader/>
    }

    return (
        <div className="my-20">
             <Helmet>
            <title>Fluent Verse | All Class</title>
            </Helmet>
           <Container>
                <SectionHeading title='All Classes'/>
               {approvedClasses.length === 0? <div>Kono data Nai</div>:
               <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        approvedClasses.map(item=> <SingleClass key={item._id} singleClass={item}/>)
                    }
                </div>
}
           </Container>
        </div>
    );
};

export default Classes;