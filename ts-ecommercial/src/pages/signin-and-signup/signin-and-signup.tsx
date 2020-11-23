import React, { FC } from "react";

import "./sing-in-and-sign-up.styles.scss";
import SignIn from "../../components/sign-in/sign_in";
import SignUp from "../../components/sign-up/sign_up";

const SigInAndSignUpPage:FC = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SigInAndSignUpPage;
