import React from "react";
import "./style.css";
import PictureForm from "../PictureForm"
import HomePageCard from "../HomePageCard"

function Home(props) {


    return (
        <div className="background">
            <form>
            <div className="form-group">
                
            <h2 className="title">
                ~ Journal Notes ~
                <br/>
                <br/>
Welcome back ... User
                </h2>  

<PictureForm />
<HomePageCard />





            </div>
            </form>
        </div>
    );
}

export default Home;





