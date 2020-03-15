import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";

export default function App() {
  const [enteredItem, setEnteredItem] = useState("");
  const [itensList, setItensList] = useState([]);

  const handleTextChange = enteredText => {
    setEnteredItem(enteredText);
  };

  const handleAddItens = () => {
    setItensList([
      ...itensList,
      { key: Math.random().toString(), value: enteredItem } // FlatList expects an array of objects
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Shop List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter an item"
          style={styles.input}
          onChangeText={handleTextChange}
          value={enteredItem}
        ></TextInput>
        <Button title="ADD" onPress={handleAddItens} />
      </View>
      <FlatList
        data={itensList} // FlatList expects an array of objects
        renderItem={itemData => (
          <View style={styles.list}>
            <Text style={styles.item}>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30
  },
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
  },
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
