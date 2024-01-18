import { useEffect } from "react";
import { useSelector } from "react-redux"
import Navbar from "../components/Navbar";




export default function HomePage() {


    const user = useSelector(state => state.auth.userData);


   
    return <div className=" bg-slate-950 w-full h-screen text-white ">
        <Navbar />
    </div>
}