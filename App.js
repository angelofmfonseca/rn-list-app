import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Shop List</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter an item" style={styles.input}></TextInput>
        <Button title="ADD" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  title: {
    fontSize: 22,
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
    width: "80%"
  }
});
