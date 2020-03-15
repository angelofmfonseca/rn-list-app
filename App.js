import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";

const App = () => {
  const [itensList, setItensList] = useState([]);

  const handleAddItens = enteredItem => {
    setItensList([
      ...itensList,
      { key: Math.random().toString(), value: enteredItem } // FlatList expects an array of objects
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Shop List</Text>
      <ListInput handleAddItens={handleAddItens} />
      <FlatList
        data={itensList} // FlatList expects an array of objects
        renderItem={itemData => <ListItem itemData={itemData.item.value} />}
      />
    </View>
  );
};

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
  }
});

export default App;
