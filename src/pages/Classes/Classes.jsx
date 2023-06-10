import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import Container from "../../component/share/Container";
import SingleClass from "../../component/Classes/SingleClass";



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
    if(classLoading){
        return 'loading...'
    }

    return (
        <div className="my-20">
           <Container>
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