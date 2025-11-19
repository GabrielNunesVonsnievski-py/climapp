import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"

export default function Index() {
  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      {/* <Image source={require("../assets/images/logo.png")}/>
      <Image source={require("../assets/images/weather.png")}/> */}
      <Text>Boas Vindas!</Text>
      <TouchableOpacity>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 64
  }
})