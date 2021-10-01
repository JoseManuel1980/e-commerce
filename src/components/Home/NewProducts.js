import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import ListProduct from "./ListProducts";
import { getLastProuctsApi } from "../../api/product";

export default function NewProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLastProuctsApi(6);
      setProducts(response);
      //console.log(response);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuevos productos</Text>
      {products && <ListProduct products={products} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
  },
});
