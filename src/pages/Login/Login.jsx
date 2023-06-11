import { useState } from 'react';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { addUser } from '../../api/userApi';

const Login = () => {
    const { signInEmailPassword,googleSignIn } = useAuth();
    const [error, setError] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = data => {
        console.log(data);
        setError('')
        signInEmailPassword(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                reset();
                return navigate(from, { replace: true });
            })
            .catch(error => {

                setError(error.message);
            });
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                addUser(loggedInUser.displayName, loggedInUser.email, loggedInUser.photoURL)
                    .then(() => {
                        navigate('/');
                    })
            })
    }

    return (

        <div className="relative py-4 bg-gradient-to-br from-sky-50 to-gray-200">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4"> 
                            {
                                error&& <span className='text-red-500'>
                                    {error}
                                </span>
                            }
                                
                                <h2 className="mb-4 text-2xl text-cyan-900 font-bold"> Please Sign in</h2>
                            </div>
                            <div className="space-y-4">
                                <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mx-auto max-w-lg">
                                        <div className="py-2">
                                            <span className="px-1 text-sm text-gray-600">Email</span>
                                            <input placeholder="" type="email" {...register("email", { required: true })}
                                                className="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                            {errors.email && <span className='text-red-600'>This field is required</span>}
                                        </div>
                                        <div className="py-2" >
                                            <span className="px-1 text-sm text-gray-600">Password</span>
                                            <div className="relative">

                                                <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                                    <span className='cursor-pointer' onClick={handleShowPassword}>
                                                        {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                                                    </span>
                                                </div>
                                            </div>
                                            {errors.password && <span className='text-red-600'>This field is required</span>}
                                        </div>


                                    </div>
                                    <button className="mt-3 text-lg font-semibold 
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                                        Login
                                    </button>
                                </form>
                                <p>Don&lsquo;t Have an Account <Link to='/register'>Resgister</Link></p>

                            </div>

                            <div className="mt-16 grid space-y-4">
                                <button onClick={handleGoogleSignIn}  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                                    <div className="relative flex items-center space-x-4 justify-center">
                                        <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                                    </div>
                                </button>


                            </div>


                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Login;