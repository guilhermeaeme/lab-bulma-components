import React, { Fragment, Component } from "react";
import Container from "./Container";
import NavBar from "./NavBar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";
import Message from "./Message";

class SignUp extends Component {
  render() { 
    return (
      <Fragment>
        <NavBar />

        <Container>
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />

          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

          <FormField label="Password" type="password" placeholder="e.g ********" />

          <CoolButton isSmall isDanger isRounded className="my-class">Button 1</CoolButton>
          <CoolButton isSmall isSuccess>Button 2</CoolButton>
        </Container>

        <p>&nbsp;</p>

        <Container>
          <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
          </Message>
        </Container>
      </Fragment>
    );
  }
}

export default SignUp;
