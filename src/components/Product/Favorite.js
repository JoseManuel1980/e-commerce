import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { size } from "lodash";
import {
  addFavoriteApi,
  deleteFavoriteApi,
  isFavoriteApi,
} from "../../api/favorite";
import useAuth from "../../hooks/useAuth";

export default function Favorite(props) {
  const { product } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [reloadFavorite, setReloadFavorite] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(auth, product._id);
      //console.log(response);
      if (size(response) === 0) setIsFavorite(false);
      else setIsFavorite(true);

      setReloadFavorite(false);
      setLoading(false);
    })();
  }, [product, reloadFavorite]);

  const addFavorite = async () => {
    if (!loading) {
      setLoading(true);
      try {
        await addFavoriteApi(auth, product._id);
        setIsFavorite(true);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  const deleteFavorite = async () => {
    if (!loading) {
      setLoading(true);
      await deleteFavoriteApi(auth, product._id);
      setReloadFavorite(true);
    }
  };

  if (isFavorite === undefined) return null;

  return (
    <Button
      mode="contained"
      contentStyle={
        isFavorite
          ? styles.btnDeleteFavoritesContent
          : styles.btnAddFavoritesContent
      }
      labelStyle={styles.btnLabel}
      loading={loading}
      style={styles.btn}
      onPress={isFavorite ? deleteFavorite : addFavorite}
    >
      {isFavorite ? "Eliminar de favoritos" : "Añadir a favoritos"}
    </Button>
  );
}

const styles = StyleSheet.create({
  btnLabel: {
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
  },
  btnAddFavoritesContent: {
    backgroundColor: "#057b00",
    paddingVertical: 5,
  },
  btnDeleteFavoritesContent: {
    backgroundColor: "#c40000",
    paddingVertical: 5,
  },
});
