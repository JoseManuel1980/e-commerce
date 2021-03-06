import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import StatusBar from "../../components/StatusBar";
import Search from "../../components/Search/";
import NewProducts from "../../components/Home/NewProducts";
import Banners from "../../components/Home/Banners";
import colors from "../../styles/colors";

export default function Home() {
  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      <Search />
      <ScrollView>
        <Banners />
        <NewProducts />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
