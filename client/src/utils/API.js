import axios from "axios";



export default   {
    SignIn: function(userData) {
        return axios.post("/login", userData)
    },

    SignUp: function(userData) {
        return axios.post("/register", userData)
    },


    CreateToDo: function(userData) {
        return axios.post("/api/todo", userData)
    },


    CreateAffirmation: function(userData) {
        return axios.post("api/affirmation", userData)
    },

    GetAffirmation: function() {
        return axios.get("/api/affirmation/get");
      },


    GetToDo: function(id) {
        return axios.get("/api/get");
      },

    PutToDo: function(id, userData) {
        return axios.put("api/todo/update/" + id, userData);
    },

    PutAffirmation: function(id, userData) {
        return axios.put("api/affirmation/update/" + id, userData);
    },
}



/* need to work on this above for the Sign up */