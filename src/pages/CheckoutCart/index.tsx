import React from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import useStore, { StoreInterface } from "../../utils/store";
import { CartNotification, HeaderCart, HeaderContainer } from "../../style";
import { Link } from "react-router-native";

const CheckoutCart = () => {
  const cart = useStore((state: StoreInterface) => state.cart);

  const removeProductOnCart = useStore(
    (state: StoreInterface) => state.removeProductOnCart
  );

  return (
    <CheckoutCartContainer>
      <HeaderContainer
        style={{
          borderBottomColor: "#837f7f68",
          borderBottomWidth: 2,
        }}
      >
        <Link to="/">
          <Image
            source={{
              uri: require("../../assets/icons/left-arrow.png"),
              width: 25,
              height: 25,
            }}
          />
        </Link>
        <HeaderCart>
          <CartNotification>{cart.length}</CartNotification>
          <Image
            source={{
              uri: require("../../assets/icons/cart.png"),
              width: 25,
              height: 25,
            }}
          />
        </HeaderCart>
      </HeaderContainer>
      <ProductContainer>
        {cart.length === 0 && (
          <Text style={{ textAlign: "center" }}>Carrinho vazio</Text>
        )}

        {cart.map((product, index) => (
          <ProductView key={index}>
            <ProductImageAndTitle>
              <ProductImage source={{ uri: product.image }} />
              <ProductName>{product.name}</ProductName>
            </ProductImageAndTitle>
            <TouchableHighlight onPress={() => removeProductOnCart(product)}>
              <DeleteProductImage
                source={{ uri: require("../../assets/icons/trash.png") }}
              />
            </TouchableHighlight>
          </ProductView>
        ))}
      </ProductContainer>
    </CheckoutCartContainer>
  );
};
export default CheckoutCart;

const CheckoutCartContainer = styled.View`
  flex: 1;
  height: "100%";
  flex-direction: "row";
  background-color: "white";
  z-index: 1001;
  width: "100%";
`;

const ProductView = styled.View`
  width: 100%;
  height: 60px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20%;
  padding-left: 20%;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductImageAndTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ProductImage = styled.Image`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`;

const DeleteProductImage = styled.Image`
  height: 20px;
  width: 20px;
`;

const ProductName = styled.Text`
  font-size: 16px;
`;

const ProductContainer = styled.View`
  flex: 1;
  flex-wrap: wrap;
  margin-top: 50px;
`;
