import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const ListInput = ({ handleAddItens }) => {
  const [enteredItem, setEnteredItem] = useState("");

  const handleTextChange = enteredText => {
    setEnteredItem(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter an item"
        style={styles.input}
        onChangeText={handleTextChange}
        value={enteredItem}
      />
      <Button title="ADD" onPress={() => handleAddItens(enteredItem)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    padding: 5,
    width: "80%",
    fontSize: 16
  }
});

export default ListInput;
