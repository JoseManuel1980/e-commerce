import React, { useState, useEffect } from "react";
import { StyleSheet, LogBox } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Quantity(props) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const { quantity, setQuantity } = props;
  //console.log(quantity);

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {
      label: "1",
      value: 1,
    },
    {
      label: "2",
      value: 2,
    },
    {
      label: "3",
      value: 3,
    },
    {
      label: "4",
      value: 4,
    },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={quantity}
      items={items}
      setOpen={setOpen}
      setValue={setQuantity}
      setItems={setItems}
      containerStyle={styles.containerStyle}
      textStyle={styles.itemStyle}
      dropDownContainerStyle={styles.dropDownPicker}
      style={styles.dropDownPicker}
      labelStyle={styles.labelStyle}
    />
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    width: 100,
    marginBottom: 10,
  },
  itemStyle: {
    textAlign: "auto",
  },
  dropDownPicker: {
    backgroundColor: "#fafafa",
  },
  labelStyle: {
    color: "#000",
  },
});
