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


    async Login() {

    };


    async Logout() {

    }


}

export const auth = new AuthService();