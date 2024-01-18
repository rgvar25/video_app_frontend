import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { auth } from "../backend-functions/auth";
export default function Navbar() {

    const navigate = useNavigate();

    const handleLogout = async () => {

        try {
            const response = await auth.Logout()
            console.log(response)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }


    const user = useSelector(state => state.auth.userData);
    console.log(user);
    return <>
        <div className="w-full h-20 mt-0 mx-0 border-b-2 border-b-slate-200 fixed flex items-center justify-between">
            <h1 className="ml-20">{user?.fullName}</h1>

            <button onClick={handleLogout} className="font-semibold bg-white hover:opacity-50 transition-opacity ease-in duration-150 text-black w-24 h-8 mr-20 rounded-lg cursor-pointer">
                Logout
            </button>

        </div>
    </>
}