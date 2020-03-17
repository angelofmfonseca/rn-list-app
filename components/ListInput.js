import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const ListInput = ({ handleAddItens, isModalVisible }) => {
  const [enteredItem, setEnteredItem] = useState("");

  const handleTextChange = enteredText => {
    setEnteredItem(enteredText);
  };

  const addItem = () => {
    handleAddItens(enteredItem);
    setEnteredItem("");
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter an item"
          style={styles.input}
          onChangeText={handleTextChange}
          value={enteredItem}
        />
        <Button title="ADD" onPress={addItem} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#aaa",
    padding: 5,
    marginBottom: 10,
    width: "80%",
    fontSize: 16
  }
});

export default ListInput;
