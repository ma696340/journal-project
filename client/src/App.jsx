import React from "react";
import { Button, Container } from 'reactstrap';
import Home from "./components/Home/"
import Calendar from "./components/Calendar"
import Affirmations from "./components/Affirmations"
import Journal from "./components/Journal"
import About from "./components/About"
import SignIn from "./components/SignIn"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/index";


function App() {
  return (
    <Router>
      <container className="fluid">

        
  
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/affirmations" component={Affirmations} />
            <Route exact path="/journal" component={Journal} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signin" component={SignIn} />

          </Switch>

          {/* <PictureForm /> */}

          <Navigation />
      </container>
    </Router>
  );
}



export default App;
