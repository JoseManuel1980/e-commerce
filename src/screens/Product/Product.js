import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Search";
import ScreenLoading from "../../components/ScreenLoading";
import CarouselImages from "../../components/Product/CarouselImage";
import Price from "../../components/Product/Price";
import Quantity from "../../components/Product/Quantity";
import Buy from "../../components/Product/Buy";
import Favorite from "../../components/Product/Favorite";
import { getProductApi } from "../../api/product";
import colors from "../../styles/colors";

export default function Product(props) {
  const { route } = props;
  const { params } = route;
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setProduct(null);
    (async () => {
      const response = await getProductApi(params.idProduct);
      setProduct(response);

      const arrayImages = [response.main_image];
      arrayImages.push(...response.images);
      setImages(arrayImages);
    })();
  }, [params]);

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      <Search />
      {!product ? (
        <ScreenLoading text="Cargando producto" size="large" />
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{product.title}</Text>
          </View>
          <CarouselImages images={images} />
          <View style={styles.containerView}>
            <Price price={product.price} discount={product.discount} />
            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <Buy product={product} quantity={quantity} />
            <Favorite product={product} />
          </View>
          <View>
            {product.description ? (
              <Text> {product.description} </Text>
            ) : (
              <Text>No hay descripción del producto</Text>
            )}
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  btnBuyContent: {
    backgroundColor: "#008fe9",
    paddingVertical: 5,
  },
  btnBuyLabel: {
    fontSize: 18,
  },
  btnBuy: {
    marginTop: 20,
  },
  containerView: {
    padding: 10,
  },
  containerTitle: {
    padding: 10,
  },
});
