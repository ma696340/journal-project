import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CalendarCard from "../CalendarCard";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 700
  }
});

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <container>
      <CalendarCard
        todoValue={props.todoValue}
        handleFormSubmit={props.handleFormSubmit}
        handleInputChange={props.handleInputChange}
      />
    </container>
  );
}
