import React, { useState, FC } from "react";
import { connect } from "react-redux";
import "./sign-up.styles.scss";
// import FormInput from "../form-input/form-input.component";
// import CustomButton from "../custom-button/custom-button.component";
// import { signUpStart } from "../../redux/user/user.action";
const SignUp:FC = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Password don't match ");
//       return;
//     }
//     signUpStart({ displayName, email, password });
//   };
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserCredentials({ ...userCredentials, [name]: value });
//   };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have a account</h2>
      <span>Sign up with your email and password</span>
      {/* <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={handleChange}
          label="Display Name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleChange}
          label="ConfirmPassword"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form> */}
    </div>
  );
};
// const mapDispatchToProps = (dispatch) => ({
//   signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
// });
// export default connect(null, mapDispatchToProps)(SignUp);
export default SignUp