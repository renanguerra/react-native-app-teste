import styled from "styled-components/native";
import { Image, Text } from "react-native";
import React from "react";
import { PrimaryButton, SecondaryButton } from "../../style";
import useStore, { StoreInterface } from "../../utils/store";

export interface ProductInterface {
  id: number;
  name: string;
  image: string;
}

interface ProductViewerInterface {
  product: ProductInterface;
}

const ProductViewer = ({ product}:ProductViewerInterface) => {
  const cart = useStore((state: StoreInterface) => state.cart);
  const addProductOnCart = useStore(
    (state: StoreInterface) => state.addProductOnCart
  );
  const removeProductOnCart = useStore(
    (state: StoreInterface) => state.removeProductOnCart
  );

  return (
    <ProductBody>
      <Image
        source={{
          uri: product.image,
          width: 100,
          height: 100,
        }}
      />
      <Text>{product.name}</Text>

      {cart.findIndex((productCart) => {
        return productCart.id === product.id;
      }) === -1 ? (
        <PrimaryButton onPress={() => addProductOnCart(product)}>
          Adicionar
        </PrimaryButton>
      ) : (
        <SecondaryButton onPress={() => removeProductOnCart(product)}>
          Remover
        </SecondaryButton>
      )}
    </ProductBody>
  );
};

export default ProductViewer;

const ProductBody = styled.View`
  border: 2px solid #837f7f68;
  border-radius: 5px;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
  width: 35%;
`;
