import React, { FC } from "react";
import { connect } from "react-redux";

// import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection_item.styles";
interface ItemObject {
  name: string;
  price: string;
  imageUrl : string;
}
interface CollectionItemProps {
  item: ItemObject;
}
const CollectionItem: FC<CollectionItemProps> = ({ item }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      {/* <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton> */}
    </CollectionItemContainer>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   addItem: (item) => dispatch(addItem(item)),
// });

// export default connect(null, mapDispatchToProps)(CollectionItem);
 export default CollectionItem;