import axios from "axios";


class AuthService {




    async Signup(credentials) {
        const requestHeaders = {};
        try {
            let response = await axios.post('http://localhost:8000/api/v1/users/register', credentials, {
                headers: requestHeaders
            })
            console.log(response);
            return response;
        } catch (error) {
            throw new Error(error.response.data.data)
        }
    };


    async Login(credentials) {
        const requestHeaders = {}

        try {
            let response = await axios.post("http://localhost:8000/api/v1/users/login", credentials, {
                headers: requestHeaders,
                withCredentials: true //To send cookies.
            })

            console.log(response);
            return response;
        } catch (error) {

            throw new Error(error.response.data.data)
        }
    };


    async Logout() {
        const requestHeaders = {};

        try {
            let response = await axios.post("http://localhost:8000/api/v1/users/logout", {}, {
                headers: requestHeaders,
                withCredentials: true
            })


            return response;
        } catch (error) {

            throw new Error(error)
        }

    }

    async Verify() {

        try {
            let response = await axios.post("http://localhost:8000/api/v1/users/verify", {}, {
                headers: {},
                withCredentials: true
            })
            console.log(response);
            return response

        } catch (error) {
            throw new Error(error)
        }
    }


}

export const auth = new AuthService();