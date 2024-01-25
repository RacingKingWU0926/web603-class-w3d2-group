import React from "react";
import Contacts from "./contacts";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        contacts: [],
      };
    }

    componentDidMount = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data =>
        this.setState({
          loading: false,
          contacts: data
        })
      )
      .catch(console.log);
    }

    render() {
      const listTable = this.state.loading ? (
        <span>Loading Data...Please be patient.</span>
      ) : (
        <Contacts contacts={this.state.contacts}></Contacts>
      );

      return (
        <div className="container">
          {listTable}
        </div>
      )
    }

  }

export default App;
