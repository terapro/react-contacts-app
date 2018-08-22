import React, { Component } from "react";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Contacts from "./components/Contacts/Contacts";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/pages/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/Contacts/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
