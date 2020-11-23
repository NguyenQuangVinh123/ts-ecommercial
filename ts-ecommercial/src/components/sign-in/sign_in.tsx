import React, { useState, FC, FormEvent } from "react";
import { connect } from "react-redux";
import "./sign_in.styles.scss";
import FormInput from "../form-input/form_input";
import CustomButton from "../custom-button/custom_button";
// import {
//   googleSignInStart,
//   emailSignInStart,
// } from "../../redux/user/user.action";
// import {auth} from 'firebase'

const SignIn:FC = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email , password } = userCredentials;

  const handleSubmit = async (event:FormEvent) => {
    event.preventDefault();

    // emailSignInStart(email, password);
  };
  const handleChange = (event: { target: { value: string; name: string } }) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email account</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          handleChange={handleChange}
          value={password}
          required
        />
        <div className="buttons">
          {/* <CustomButton onClick={handleSubmit} type="submit">
            SIGN IN
          </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            SIGN IN WITH GOOGLE
          </CustomButton> */}
        </div>
      </form>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart: (email, password) =>
//     dispatch(emailSignInStart({ email, password })),
// });

export default SignIn;
