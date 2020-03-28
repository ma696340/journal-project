import React from "react";
import { Button, Container } from 'reactstrap';
import Home from "./components/Home/"
import Affirmations from "./components/Affirmations"
import Calendar from "./components/Calendar"
import About from "./components/About"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navigation from "./components/Navigation/index";



function App() {
  return (
    <Router>
      

        
  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/affirmations" component={Affirmations} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />

          </Switch>

          {/* <PictureForm /> */}

          <Navigation />
    
    </Router>
  );

}





export default App;
