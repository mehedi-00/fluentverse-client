import { useState } from 'react';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
    };
    return (

        <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4">
                                <img src="https://tailus.io/sources/blocks/social/preview/images/icon.svg" loading="lazy" className="w-10" alt="tailus logo" />
                                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the <br /> best of Tailus.</h2>
                            </div>
                            <div className="space-y-4">
                                <form className="mt-8" onSubmit={handleSubmit}>
                                    <div className="mx-auto max-w-lg">
                                        <div className="py-2">
                                            <span className="px-1 text-sm text-gray-600">Username</span>
                                            <input placeholder="" type="text"
                                                className="text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                        </div>
                                        <div className="py-2" >
                                            <span className="px-1 text-sm text-gray-600">Password</span>
                                            <div className="relative">
                                               
                                                <input type={showPassword ? 'text' : 'password'} className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                                    <button onClick={handleShowPassword}>
                                                      {showPassword?  <FaRegEyeSlash/>: <FaEye />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <button className="mt-3 text-lg font-semibold 
                bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                                        Login
                                    </button>
                                </form>
                                <p>Don't Have an Account <Link to='/register'>Resgister</Link></p>

                            </div>

                            <div className="mt-16 grid space-y-4">
                                <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
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