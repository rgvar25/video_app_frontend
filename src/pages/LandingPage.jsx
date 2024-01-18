import React, { useEffect, useState } from "react";
import { auth } from "../backend-functions/auth";
import { useNavigate } from "react-router-dom";
import LandingPageComponent from "../components/LandingPageComponent";

const LandingPage = () => {
    const navigate = useNavigate();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        //You can directly use async keyword in callback of useEffect(Only works in React 18 or above)
        const fetchData = async () => {
            try {
                const response = await auth.Verify();

                if (response.status === 200) {
                    // User is verified
                    setVerified(true);
                } else {
                    // User is not verified
                    setVerified(false);
                }
            } catch (error) {
                // Handle errors appropriately
                console.error("Error:", error);
                setVerified(false);
            }
        };

        // Run the fetchData function
        fetchData();
    }, []);

    return (
        <>
            {verified ? (
                // If user is verified, navigate to home page
                navigate("/home")
            ) : (
                // If user is not verified, display the LandingPageComponent
                <LandingPageComponent />
            )}
        </>
    );
};

export default LandingPage;