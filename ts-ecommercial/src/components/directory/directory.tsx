import React, { FC, HtmlHTMLAttributes } from "react";
import MenuItem from "../menu-item/menu_item";
import { connect } from "react-redux";
import "./directory.styles.scss";
import { createStructuredSelector} from 'reselect'
// import {selectDirectorySections} from '../../redux/directory/directory.selector'
interface sections {
  id: number;
  label?: string;
}

type simpleType = sections[];
const Directory: FC<simpleType> = (sections) => (
  <div className="directory-menu">
    {sections.map(({id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

// const mapStateToProps = createStructuredSelector({
//   sections : selectDirectorySections
// })
export default Directory;
