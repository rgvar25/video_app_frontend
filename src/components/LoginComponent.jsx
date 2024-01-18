
import React from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { auth } from "../backend-functions/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/authSlice";



export default function LoginComponent() {

    const [error, setError] = React.useState()
    const navigate = useNavigate()
    //Same as handleSignup in SignUpComponent 
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();


    const handleLogin = async (data) => {
        try {
            const response = await auth.Login(data);
            const { _id, username, email, fullName, avatar, coverImage } = response.data.data.user;
            await dispatch(login({ _id, username, email, fullName, avatar, coverImage }));
            navigate("/home")
            
        } catch (error) {
            console.log(error);
            setError(error.message)
        }

    }


    return (
        <>

            <div className=" h-screen flex items-center bg-slate-950 flex-col text-white w-full justify-center">
                <div>
                    <h1 className=" text-center my-4 font-bold text-3xl">Login</h1>
                </div>

                <div className=" justify-center flex w-full ">
                    <form onSubmit={handleSubmit(handleLogin)} encType="multipart/form-data" className=" flex flex-col">
                        <input name="username" type="text" className=" my-4 p-1 transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 text-black rounded-md" placeholder="Username or Email" {...register("username")} />

                        <input type="password" name="password" className=" my-4 p-1  text-black transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 rounded-md" placeholder="Password" {...register("password")} />


                        <input type="submit" className=" bg-white text-black w-24 h-8 rounded-lg  mx-auto my-4 opacity-50 hover:opacity-100 transition-opacity ease-in  duration-300  cursor-pointer " value='Login' />

                    </form>



                </div>

                <div className=" my-2">
                    <span>New here? <Link className=" cursor-pointer font-semibold" to="/signup">Sign in</Link></span>
                </div>

                <div className=" my-3">
                    {error ? <span>{error}</span> : null}
                </div>


            </div >
        </>
    )
}