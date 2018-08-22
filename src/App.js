import React, { Component } from "react";
import Header from "./components/layout/Header";
import Contacts from "./components/Contacts/Contacts";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddContact from "./components/Contacts/AddContact";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact manager" />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
