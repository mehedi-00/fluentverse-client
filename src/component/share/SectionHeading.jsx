
import  {motion} from 'framer-motion'

const SectionHeading = ({ title }) => {
    return (
        <div >
            <div className='sm:bg-[#4a6a59] pt-10 md:pt-20 mt-5'>
            <motion.h1
            initial={{x: -100}}
            animate= {{x: [0,900,0]}}
            transition={
                {
                    duration: '3',
                    delay: '1'
                }
            }
             className="text-3xl font-extrabold  sm:text-white text-center">
                {title}
                </motion.h1>
            </div>
            
            <div className=" shapedividers_com-7 h-10 md:h-[20vh] shadow-green-800">
            </div>

        </div>
    );
};

export default SectionHeading;