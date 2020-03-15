import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ListItem = ({ itemData, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete}>
      <View style={styles.list}>
        <Text style={styles.item}>{itemData}</Text>
      </View>
    </TouchableOpacity>
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
