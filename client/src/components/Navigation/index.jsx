import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      
    },
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>Home</Button>
      <Button>Affirmations</Button>
      <Button>To Do Calendar</Button>
      <Button>About</Button>
      <Button>Sign In</Button>
      
    </div>
  );
}
