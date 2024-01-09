import { useState } from "react"
import SignupComponent from "../components/SignupComponent"





export default function SignUpPage() {
    const [error, setError] = useState();

   

    console.log(error);
    return (
        <>
            <SignupComponent  error={error} />
        </>
    )
}