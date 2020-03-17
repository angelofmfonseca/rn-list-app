import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const ListInput = ({ handleAddItens, isModalVisible, cancelItemAddition }) => {
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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addItem} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelItemAddition} />
          </View>
        </View>
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
    padding: 10,
    marginBottom: 20,
    width: "80%",
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});

export default ListInput;
