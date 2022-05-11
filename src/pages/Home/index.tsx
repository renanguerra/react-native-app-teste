import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, Text, Image } from "react-native";
import { Link } from "react-router-native";
import { CartNotification, HeaderCart, HeaderContainer } from "../../style";
import ProductViewer from "../../components/ProductViewer";
import { ProductContainer } from "../../style";
import { products } from "../../utils/constants";
import useStore, { StoreInterface } from "../../utils/store";

const Home = () => {
  const cart = useStore((state: StoreInterface) => state.cart);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <HeaderContainer
        style={{
          borderBottomColor: "#837f7f68",
          borderBottomWidth: 2,
        }}
      >
        <Text>Ton</Text>
        <Link to={"/checkout"}>
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
        </Link>
      </HeaderContainer>

      <ProductContainer>
        {products.map((product, index) => (
          <ProductViewer product={product} key={index} />
        ))}
      </ProductContainer>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    width: "100px",
    borderColor: "black",
  },
});
