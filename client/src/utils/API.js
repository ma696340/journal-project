import axios from "axios";



export default   {
    SignIn: function(userData) {
        return axios.post("/login", userData)
    },
    CreateToDo: function(userData) {
        return axios.post("/api/todo", userData)
    },
    CreateAffirmation: function(userData) {
        return axios.post("api/affirmation", userData)
    }
}

/* need to work on this above for the Sign up */