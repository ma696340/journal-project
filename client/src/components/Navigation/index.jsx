import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import "./style.css";




export default function NavButtons() {
  return (
    <div className="text-center">
    
    <Fragment>
      <Button className="m-2 btn-link-primary">
        <span>Home</span>
      </Button>
      <Button className="m-2 btn-link-first">
        <span>Calendar</span>
      </Button>
      <Button className="m-2 btn-link-second">
        <span>Affirmations</span>
      </Button>

      <Button className="m-2 btn-link-info">
        <span>Journal</span>
      </Button>
      <Button className="m-2 btn-link-success">
        <span>About</span>
      </Button>
      <Button className="m-2 btn-link-success">
        <span>Sign In</span>
      </Button>
    
    </Fragment>

    </div>
  );
}
