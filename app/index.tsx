import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from "expo-router";

export default function Index() {
  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
      <Image source={require("../assets/images/logo_climapp.png")}/>
      <Image source={require("../assets/images/weather.png")}/>
      <Text style={styles.title}>Boas Vindas!</Text>

      <TouchableOpacity onPress={() => { router.push("/cities") }} style={styles.button}>
        <Text style={styles.buttonTitle}>Entrar</Text>
        <Ionicons name='arrow-forward' size={24} color={"#01080E"}/>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 64,
    paddingVertical: 79,
    paddingHorizontal: 32
  },
  title:{
    fontSize: 25,
    color: '#FFF',
    fontFamily: "Montserrat_400Regular"
  },
  button:{
    width: "100%",
    height: 40,
    backgroundColor:"#7693FF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    flexDirection: 'row',
    gap: 8
  },
  buttonTitle:{
    color: "#01080E",
    fontSize: 20,
    fontWeight: '600',
    fontFamily: "Montserrat_600Semibold"
  }
})