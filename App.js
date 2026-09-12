import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, View } from "react-native";
import StatisticsInfo from "./components/StatisticsInfo";
import ImagePile from "./components/ImagePile";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/ocean.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <StatusBar style="light" />
        <StatisticsInfo />
        <ImagePile />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 60,
  },
});
