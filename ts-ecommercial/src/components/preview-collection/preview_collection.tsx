import React, { FC } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import CollectionItem from "../collection-item/collection_item";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./preview_collection.styles";
interface PreviewCollectionProps extends RouteComponentProps<any> {
  title?: string;
  size?: string;
  items: [];
  routeName : string;
}
const PreviewCollection: FC<PreviewCollectionProps> = ({
  title,
  items,
  history,
  match,
  routeName,
}) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title?.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item, index) => (
          <CollectionItem key={index} item ={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(PreviewCollection);
