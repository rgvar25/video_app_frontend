import { useForm } from "react-hook-form";
import { auth } from "../backend-functions/auth";
import React from "react";
export default function SignupComponent() {

    const [error, setError] = React.useState();

    const handleSignUp = async (data) => {
        const { username, email, fullName, avatar, coverImage, password } = data;

        //use formData to correctly construct a request body.
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("fullName", fullName);
        formData.append("password", password);
        formData.append("avatar", avatar[0]);
        if (coverImage.length > 0) {
            formData.append("coverImage", coverImage[0]);
        }

        try {
            const response = await auth.Signup(formData);
            // console.log("success:" + response);

        } catch (error) {
            setError(error.message);
            //console.log(error.message);
        }




    }



    const { register, handleSubmit } = useForm();
    return <>
        <div className=" h-screen flex items-center bg-slate-950 flex-col text-white w-full justify-center">
            <div>
                <h1 className=" text-center my-4 font-bold text-3xl">Sign up</h1>
            </div>

            <div className=" justify-center flex w-full ">
                <form onSubmit={handleSubmit(handleSignUp)} encType="multipart/form-data" className=" flex flex-col">
                    <input name="username" type="text" className=" my-4 p-1 transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 text-black rounded-md" placeholder="Username" {...register("username")} />

                    <input type="text" className=" my-4 p-1 transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 text-black rounded-md" name="email" placeholder="Email" {...register("email")} />

                    <input type="text" name="fullName" className=" my-4 p-1 transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 text-black rounded-md" placeholder="Full Name" {...register("fullName")} />

                    <div className=" my-4 p-1">
                        <label htmlFor='avatar' className="opacity-50 ml-0 mr-5">Avatar</label>
                        <input type="file" name="avatar" id="avatar" placeholder="Avatar" className="  transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 rounded-md" {...register("avatar")} />
                    </div>


                    <div className=" my-4 p-1">
                        <label htmlFor='cover' className=" opacity-50 ml-0 mr-5">Cover Image</label>
                        <input type="file" className="transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 rounded-md" id="cover" name="coverImage" placeholder="Cover image" {...register("coverImage")} />
                    </div>


                    <input type="password" name="password" className=" my-4 p-1  text-black transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 rounded-md" placeholder="Password" {...register("password")} />

                    <input type="password" name="confirmPassword" className=" my-4 p-1 transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 text-black rounded-md" placeholder="Confirm password" {...register("confirmPassword")} />

                    <input type="submit" className=" bg-white text-black w-24 h-8 rounded-lg  mx-auto my-4 opacity-50 hover:opacity-100 transition-opacity ease-in  duration-300  cursor-pointer" value="Signup" />

                </form>



            </div>

            <div className=" my-3">
                {error ? <span>{error}</span> : null}
            </div>


        </div >
    </>
}