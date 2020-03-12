import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.general}>
      <View>
        <TextInput
          placeholder="Course goal"
          style={styles.enterGoal}
        ></TextInput>
        <Button title="ADD" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  general: {
    padding: 50
  },
  enterGoal: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 5
  }
});
