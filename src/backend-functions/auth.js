import axios from "axios";


class AuthService {




    async Signup(credentials) {
        const requestHeaders = {};

        let response = await axios.post('http://localhost:8000/api/v1/users/register', credentials, {
            headers: requestHeaders
        })

        return response;

    
    };


    async Login() {

    };


    async Logout() {

    }


}

export const auth = new AuthService();