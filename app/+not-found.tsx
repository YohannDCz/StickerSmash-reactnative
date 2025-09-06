import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <>
      <Stack.Screen name="not-found" options={{ title: "Not found" }} />
      <View
        style={styles.container}
      >
        <Link href="/" style={styles.button}>Go back to home screen!</Link>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e"
  },
  button: {
    fontSize: 14,
    textDecorationLine: "underline",
    color: "#fff",
  }
})