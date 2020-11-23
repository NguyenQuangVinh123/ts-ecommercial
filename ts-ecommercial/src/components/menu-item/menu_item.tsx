import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menu_item.styles";

interface MenuItemProps extends RouteComponentProps<any> {
  title?: string;
  size?: string;
  imageUrl?: string;
  linkUrl? : string;
}
const MenuItem: FC<MenuItemProps> = ({
  title,
  size,
  imageUrl,
  history,
  linkUrl,
  match
}) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer className="content">
      <ContentTitle>{title?.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
