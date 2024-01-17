
import React from "react";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { auth } from "../backend-functions/auth";




export default function LoginComponent() {

    const [error, setError] = React.useState()
       
    //Same as handleSignup in SignUpComponent 
    const handleLogin = async (data) => {
        const { username, password } = data;
        const formData = new FormData();
        formData.append('uname', username);
        formData.append('password', password);
        console.log(formData);

        try {
            const response = await auth.Login(data);
            console.log(response);
        } catch (error) {
            console.log(error);
            setError(error.message)
        }

    }

    const { register, handleSubmit } = useForm();
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