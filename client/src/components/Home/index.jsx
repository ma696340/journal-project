import React from "react";
import "./style.css";
import PictureForm from "../PictureForm"
import HomePageCard from "../HomePageCard"

function Home(props) {


    return (
        <div className="background">
            <form>
            <div className="form-group">

            <h1 className="title">
Welcome back ... User
                </h1>  

<PictureForm />
<HomePageCard />





            </div>
            </form>
        </div>
    );
}

export default Home;





