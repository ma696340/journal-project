import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Tabs from "../Tabs";


const useStyles = makeStyles({
  root: {
    minWidth: 175,
    position: "absolute",
    top: 20,
    right: 20,
    left: 710,
    bottom: 20,


  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CalendarCard(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <Tabs 
        todoValue={props.todoValue}
        handleFormSubmit={props.handleFormSubmit}
        handleInputChange={props.handleInputChange} />

      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}