import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, Image } from "react-native";
import { Link } from "react-router-native";
import { CartNotification, HeaderCart, HeaderContainer } from "../../style";
import ProductViewer from "../../components/ProductViewer";
import { ProductContainer } from "../../style";
import useStore, { ProductInterface, StoreInterface } from "../../utils/store";
import axios from "axios";

const Home = () => {
  const cart = useStore((state: StoreInterface) => state.cart);
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://heroku-api-testes.herokuapp.com/")
      .then((result) => {
        setProducts(result.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

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
        {products.length === 0 && !loading && (
          <Text style={{ textAlign: "center" }}>
            Nenhum produto disponivel!
          </Text>
        )}

        {loading && (
          <Text style={{ textAlign: "center" }}>Carregando produtos...</Text>
        )}

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
