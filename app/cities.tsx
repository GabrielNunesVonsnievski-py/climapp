import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import citiesData from "../data/cities.json"


const Cities = () => {
    console.log(citiesData)
    return (
        <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
            {
                citiesData.map(city => (
                    <View>
                        <Text style={styles.cityName}>
                            {city.city}
                        </Text>
                    </View>
                ))
            }
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    listItem:{
        width: 64,
        height: "100%"
    },
    cityName:{
        color: '#FFFF',
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium'
    }
})

export default Cities;