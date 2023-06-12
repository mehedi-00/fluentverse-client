import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const SingleClass = ({ singleClass }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    _id,
    image,
    instructor_name,
    instructor_email,
    price,
    avilable_seats,
    class_name
  } = singleClass;

  const handleSelect = () => {

    if (user && user?.email) {
      const newData = {
        class_id: _id,
        email: user?.email,
        class_image: image,
        class_name: class_name,
        price: price
      };


      axiosSecure.post('/select-class', newData)
        .then(data => {
          if (data.data.insertedId) {
            toast.success('Successfully seleced class!');
          }
        });
    } else {
      Swal.fire({
        title: 'Please Login First?',
        showCancelButton: true,
        confirmButtonText: 'Login',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }


  };




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
          onClick={handleSelect}
          className=" btn btn-primary"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default SingleClass;