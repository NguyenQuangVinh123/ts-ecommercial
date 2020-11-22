// import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {HeaderContainer,LogoContainer,OptionLink,OptionsContainer,OptionDiv} from "./header-styles"

interface HeaderProps  {
    currentUser : string;
    hidden : boolean;
    signOutStart : object
}

const Header = (props : HeaderProps) => (
    <div>

    </div>
)
export default Header;