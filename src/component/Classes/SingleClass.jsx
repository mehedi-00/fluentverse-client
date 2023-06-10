
const SingleClass = ({singleClass}) => {
    const { 
        image,
        instructor_name,
        instructor_email,
        price,
        avilable_seats,
        class_name
        } = singleClass
    return (
        <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  shadow-black">
  <div className="relative mx-4 mt-4 h-64 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={image}
      className="h-full w-full object-cover"
    />
  </div>
  <div className="py-8 px-6">
    <div className="mb-4 flex items-center justify-between">
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
       {class_name}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        ${price}
      </p>
    </div>
    
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
       Instructor: {instructor_name}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      Email: {instructor_email}
      </p>
      <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      Available seats: {avilable_seats}
      </p>
   
  
  </div>
  <div className="p-6 pt-0 mx-auto">
    <button
      className=" btn btn-primary"
    >
      Select
    </button>
  </div>
</div>
    );
};

export default SingleClass;