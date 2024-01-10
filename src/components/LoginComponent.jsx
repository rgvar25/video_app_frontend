
import React from "react";
import { useForm } from "react-hook-form"

export default function LoginComponent() {

    const [error,setError] = React.useState()
;
    const handleLogin = () => {

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
                        <input name="username" type="text" className=" my-4 p-1 transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 text-black rounded-md" placeholder="Username" {...register("username")} />

                        <input type="password" name="password" className=" my-4 p-1  text-black transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 rounded-md" placeholder="Password" {...register("password")} />


                        <input type="submit" className=" bg-white text-black w-24 h-8 rounded-lg  mx-auto my-4 opacity-50 hover:opacity-100 transition-opacity ease-in  duration-300  cursor-pointer " value='Login' />

                    </form>



                </div>

                <div className=" my-3">
                    {error ? <span>{error}</span> : null}
                </div>


            </div >
        </>
    )
}