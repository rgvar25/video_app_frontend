




export default function SignupComponent() {

    return <>
        <div className=" h-screen flex items-center bg-slate-950 flex-col text-white w-full justify-center">
            <div>
                <h1 className=" text-center my-4 font-bold text-3xl">Sign up</h1>
            </div>

            <div className=" justify-center flex w-full ">
                <form action="" className=" flex flex-col ">
                    <input name="username" type="text" className=" my-4 p-1 transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 text-black rounded-md" placeholder="Username" />

                    <input type="text" className=" my-4 p-1 transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 text-black rounded-md" name="email" placeholder="Email" />

                    <input type="text" name="fullName" className=" my-4 p-1 transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 text-black rounded-md" placeholder="Full Name" />

                    <div className=" my-4 p-1">
                        <label for='avatar' className="opacity-50 ml-0 mr-5">Avatar</label>
                        <input type="file" name="avatar" id="avatar" placeholder="Avatar" className="  transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 rounded-md"/>
                    </div>


                    <div className=" my-4 p-1">
                        <label for='cover' className=" opacity-50 ml-0 mr-5">Cover Image</label>
                        <input type="file" className="transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 rounded-md" id="cover" name="coverImage" placeholder="Cover image" />
                    </div>


                    <input type="password" name="password" className=" my-4 p-1  text-black transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 rounded-md" placeholder="Password" />

                    <input type="password" name="confirmPassword" className=" my-4 p-1 transition-opacity ease-in-out duration-300 outline-none opacity-50 focus:opacity-100 text-black rounded-md" placeholder="Confirm password" />
                </form>
            </div>


        </div >
    </>
}