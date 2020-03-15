import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ListItem = ({ itemData }) => {
  return (
    <View style={styles.list}>
      <Text style={styles.item}>{itemData}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#eee",
    borderColor: "#aaa",
    borderWidth: 1
  },
  item: {
    fontSize: 16
  }
});

export default ListItem;
