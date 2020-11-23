// import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {HeaderContainer,LogoContainer,OptionLink,OptionsContainer,OptionDiv} from "./header_styles"
import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
import CartIcon from "../cart-icon/cart_icon";
import CartDropDown from "../cart-dropdown/cart_dropdown";

interface HeaderProps {
  currentUser: string;
  hidden: boolean;
  signOutStart : any;
}

const Header: FC<HeaderProps> = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);
export default Header;