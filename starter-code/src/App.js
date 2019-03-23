import React, { Fragment, Component } from "react";
import NavBar from "../components/NavBar";
import FormField from "../components/FormField";

class App extends Component {
  render() { 
    return (
      <Fragment>
        <NavBar />

        <div className="container">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        </div>
      </Fragment>
    );
  }
}

export default App;
