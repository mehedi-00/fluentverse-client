
const SectionHeading = ({ title }) => {
    return (
        <div>
            <h2 className="text-3xl font-extrabold sm:bg-[#4a6a59] py-8 sm:text-white text-center">
                {title}
                </h2>
            <div className=" shapedividers_com-7 h-10 md:h-[20vh] shadow-green-800">
            </div>

        </div>
    );
};

export default SectionHeading;