
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import Container from '../../component/share/Container';
import { motion } from "framer-motion";
import SectionHeading from "../../component/share/SectionHeading";
import { Helmet } from "react-helmet";
import DataLoader from "../../component/share/DataLoader";
const Instructors = () => {
  const { loading } = useAuth();
  const { data: instrrctors = [], isLoading: instructorLoading } = useQuery({
    queryKey: ['instrrctors'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios(`${import.meta.env.VITE_SERVER_URL}/instructors`);
      return res.data;
    }

  });
  if (instructorLoading) {
    return <DataLoader />;
  }
  return (
    <div className="my-10 md:my-20">
       <Helmet>
            <title>Fluent Verse | All Instructor</title>
            </Helmet>
      <Container>
          <SectionHeading title='All Instructor'/>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-8 ">
          {
            instrrctors.map(item => <div key={item._id} className="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs shadow-teal-500">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
              >
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={item?.photoUrl} />
                <h1 className="text-lg text-gray-700"> {item?.name} </h1>
                <h3 className="text-sm text-gray-400 "> {item?.email} </h3>

                <button className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Visit Clas</button>
              </motion.div>
            </div>)
          }
        </div>

      </Container>
    </div>
  );
};

Instructors.propTypes = {

};

export default Instructors;