import React from "react";
import "./style.css";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { grey } from "@material-ui/core/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: grey
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <header className="head">
        About
      </header>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="What is an Affirmation?" {...a11yProps(0)} />
          <Tab label="What is an intention?" {...a11yProps(1)} />
          <Tab label="How do you Manifest?" {...a11yProps(2)} />
          <Tab label="Creating achievable Goals" {...a11yProps(3)} />


        </Tabs>
      </AppBar>
      <TabPanel className="container" value={value} index={0}>
        <h3 className="font">
          What is an Affirmation?
        </h3>
        <br />
        <container className="container">
          <h4>
            Affirmations are sentences aimed to affect the conscious and the subconscious mind, so that in turn, they affect our behavior, thinking patterns, habits and environment.
            The words composing the affirmation, automatically and involuntarily, bring up related mental images into the mind, which inspire, energize and motivate. The affirmations, and the resultant mental images,
            get engraved on the subconscious mind, which in turn, changes the behavior, habits, actions and reactions according to the repeated words.
        </h4>
        </container>
        <br />
        <h3 h3 className="font">
          What do Affirmations do?
        </h3>
        <br />
        <container>
          <h4>
            They motivate.
          <br />
            <br />
          They keep the mind focused on the goal.
          <br />
            <br />
          They influence the subconscious mind and activate its powers.
          <br />
            <br />
          They change the way you think and behave, and this can bring you into contact with new people, who can help you with your goals.
          <br />
            <br />
          Positive statements make you feel positive, energetic and active, and therefore, put you in a better position to transform your inner and external worlds.
          </h4>
        </container>
      </TabPanel>
      <TabPanel className="container" value={value} index={1}>
        <h3 h3 className="font">
          What is an Intention?
        </h3>
        <br />
        <container>
          <h4>Intentions aren't to be confused with goals: They are about who you want to be, what you wish to contribute to the world, and how you choose to touch the lives of others.
          Voicing intentions will take your mind off of your problems and perceived limitations. Instead, it will place your focus on something that will have a positive impact on your life.
          Clearly stating how you intend to feel today instead of wishing that you felt better puts the power of change in your own hands.
        <br />
            <br />

Example: I intend to live in gratitude for all that I have and all that I am, allowing joy and love to fill my heart and positive energy to fill my body.
<br />
            <br />
Example: I intend to show acts of kindness today, opening myself to any possibility to bring joy into the life of another.</h4>

        </container>
      </TabPanel>
      <TabPanel className="container" value={value} index={2}>
        <h3 h3 className="font">
          How to Manifest!
        </h3>
        <br />
        <container>
          <h4 h3 className="size">
            When you manifest something into your life, it’s because you consciously called it forward.
            Self manifestation is how we call into being our deepest desires and aspirations.
<br />
            <br />

Some steps to try when manifesting ...
<br />
            <br />
1. Believe in yourself
<br />
Acknowledge that you are capable, and through this acknowledgement, allow the desire for a better life to build within you.
<br />
            <br />
2. Create an action plan
<br />
Write it down. Read, and reread it. Own your plan, and embody its becoming.
<br />
            <br />
3. Take action
<br />
Carry your new base of knowledge, and power, with you as you charge forward into whatever life has to offer next.
<br />
            <br />
4. Focus on the positive
<br />
The more you amplify positive emotions, the higher and more powerful your manifestation will be!
<br />
            <br />
5. Visualize
<br />
Visualize who it is that you intend to become. Visualize what you want.
<br />
            <br />
          </h4>
        </container>
      </TabPanel>
      <TabPanel className="container" value={value} index={3}>
        <h3 h3 className="font">
          Creating SMART Goals!
        </h3>
        <br />
        <container>
          <h4>
            Specific
  <br />
Aim for specific goals ... simple, sensible, significant
<br />
            <br />
Measurable
<br />
Make your goal one you can measure ... meaningful, motivating
<br />
            <br />
Attainable
<br />
Avoid aiming too high or too low ... agreed, attainable
<br />
            <br />
Realistic
<br />
Choose realistic goals that you can meet and keep you moving forward ... reasonable, realistic, result-based
<br />
            <br />
Trackable/Time-bound
<br />
Choose goals you can track over time ... time-based, time limited, time-sensitive
  <br />
            <br />
          </h4>
        </container>
      </TabPanel>
    </div>
  );
}





