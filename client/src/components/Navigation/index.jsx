import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="affirmations">
        <Button>Affirmations</Button>
      </Link>
      <Link to="calendar">
        <Button>To Do Calendar</Button>
      </Link>
      <Link to="about">
        <Button>About</Button>
      </Link>
      <Link to="signin">
        <Button>Sign In</Button>
      </Link>
      <br />
      <br />
    </div>
  );
}
