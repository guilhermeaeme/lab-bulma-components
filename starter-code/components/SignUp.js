import React, { Fragment, Component } from "react";
import NavBar from "./NavBar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class SignUp extends Component {
  render() { 
    return (
      <Fragment>
        <NavBar />

        <div className="container">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />

          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

          <FormField label="Password" type="password" placeholder="e.g ********" />

          <CoolButton isSmall isDanger isRounded className="my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </div>
      </Fragment>
    );
  }
}

export default SignUp;
