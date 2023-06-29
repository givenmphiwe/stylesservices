import React from "react";
import * as Components from "./LoginComponents";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

export const Login = () => {
  const [signIn, toggle] = React.useState(true);
  const navigate = useNavigate();

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" placeholder="Name" required/>
          <Components.Input type="email" placeholder="Email" required/>
          <Components.Input type="password" placeholder="Password" required/>
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
      <FaGoogle/>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" placeholder="Email" required/>
          <Components.Input type="password" placeholder="Password" required/>
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button onClick={() => navigate("/TrainingLandin")}>Login</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Login to your account</Components.Title>
            <Components.Paragraph>
              Carry on with the great journey
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Login here
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Styles Services Training</Components.Title>
            <Components.Paragraph>
              Don't have account create one today,start the exciting journey with us!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
            Create Account
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};
