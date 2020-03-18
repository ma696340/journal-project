import React from "react";
import "./style.css";
import { Container } from "reactstrap";
import PictureForm from "../../components/PictureForm"

function Home(props) {
    return (
        <div className="background">
            <form>
            <div className="form-group">


            <h1 className="title">
Welcome back ... User
                </h1>  

<PictureForm />





            </div>
            </form>
        </div>
    );
}

export default Home;





