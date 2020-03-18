import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 

export function DayNav(props){
     return (

        <Router>
            <Switch>
              <Route exact path="/Monday" component={Saved} />
              <Route exact path="/Tuesday" component={Saved} />
              <Route exact path="/Wednesday" component={Search} />
              <Route exact path="/Thursday" component={Calendar} />
              <Route exact path="/Friday" component={Calendar} />
              <Route exact path="/Saturday" component={Calendar} />
              <Route exact path="/Sunday" component={Calendar} />
              <Route component={NoMatch} />
            </Switch>
        </Router>
    
     )
}