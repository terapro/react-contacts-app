import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id != action.payload)
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        phone: "5545-565-777",
        email: "john@tiny.url"
      },
      {
        id: 2,
        name: "Selen Vaehn",
        phone: "52323-65-211",
        email: "superman@mail.com"
      },
      {
        id: 3,
        name: "Menods Gios",
        phone: "2121-121-1212",
        email: "metrics"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
