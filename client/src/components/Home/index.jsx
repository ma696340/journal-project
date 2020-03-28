import React from "react";
import "./style.css";
import PictureForm from "../PictureForm";
import HomePageCard from "../HomePageCard";
import { FormHelperText } from "@material-ui/core";

function Home(props) {
  return (
    <div className="background">
      <form>
        <div className="form-group">
          <h3 className="title" style={{ paddingTop: 20 }}>
            <h1
              style={{
                display: "flex",
                fontWeight: "lighter",
                letterSpacing: 3,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              Journal Notes
            </h1>
            <br />
            <br />
            Welcome back ... 
          </h3>

          <PictureForm />
          <HomePageCard />
        </div>
      </form>
    </div>
  );
}

export default Home;
