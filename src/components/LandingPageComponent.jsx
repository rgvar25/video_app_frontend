
import { Link } from "react-router-dom";



export default function LandingPageComponent() {



    

    return (
        <>
            <div className=" bg-slate-950 h-screen w-full flex text-white">

                <div className=" flex w-[50%] justify-center items-center flex-col
                ">
                    <div className=" w-full   ">
                        <img src="../../images/logo.png" className="w-[30%] mx-auto text-white" />
                    </div>

                    <div className=" text-center">
                        <h1 className="   text-center font-extrabold mb-4 text-5xl">TuneTube</h1>
                        <span className=" mx-auto ">Tune in for entertainment.</span>
                    </div>
                </div>

                <div className="  w-1/2 flex justify-center items-center flex-col ">

                    <div>
                        <h1 className=" font-semibold text-4xl mb-10
                         text-center">Start Exploring.</h1>
                    </div>

                    <div className="w-full flex justify-center ">
                        <Link to="/login"> <button className=" font-semibold bg-white hover:opacity-50 transition-opacity ease-in duration-150  text-black w-32 h-12  mx-4 rounded-lg   cursor-pointer">Login</button></Link>
                        <Link to="/signup"><button className=" font-semibold hover:opacity-50 transition-opacity ease-in duration-150 bg-white text-black w-32 h-12  mx-4 rounded-lg   cursor-pointer">Sign in </button></Link>
                    </div>
                </div>

            </div>
        </>
    )

}