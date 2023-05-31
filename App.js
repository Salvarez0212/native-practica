import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Characters from "./screens/Characters";

export default function App() {
  return (
    <View style={styles.container}>
      <Characters />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
