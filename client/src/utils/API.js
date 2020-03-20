import axios from "axios";



export default   {
    SignIn: function(userData) {
        return axios.post("/login", userData)
    }
}