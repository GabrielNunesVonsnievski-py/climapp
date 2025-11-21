import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import citiesData from "../data/cities.json"
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";


const Cities = () => {
    const [search, setSearch] = useState("");
    const [filteredCities, setFilteredCities] = useState(citiesData)

    useEffect(() => {
        console.log(search)
        const newFilteredCities = citiesData.filter(city => city.city.toLocaleLowerCase().includes(search.toLowerCase()))

        setFilteredCities(newFilteredCities)
    }, [search]);

    return (
        <LinearGradient
            colors={["#00457D", "#05051F"]}
            style={styles.container}
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Digite a cidade"
                    placeholderTextColor={'#FFF'}
                    style={styles.input}
                    value={search} onChangeText={(value) => setSearch(value)}
                />
                <Ionicons
                    name="search"
                    size={18}
                    color={"#FFF"} />
            </View>

            <ScrollView >
                <View style={styles.scrollList}>
                    {filteredCities.map(city => (
                        <View key={city.city} style={styles.listItem}>
                            <Image
                                source={require("../assets/images/Vector.png")}
                                style={styles.cityImage}
                            />
                            <Text style={styles.cityName}>{city.city.replace(",", " - ")}</Text>
                            <Text style={styles.cityTemp}>{city.temp}º</Text>
                        </View>
                    ))
                    }
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        gap: 16,
        paddingTop: 40
    },
    scrollList: {
        gap: 16
    },
    listItem: {
        height: 63,
        width: "100%",
        backgroundColor: "rgb(255,255,255, 0.15)",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 16,
        flexDirection: "row",
        paddingHorizontal: 16
    },
    cityName: {
        color: '#FFFF',
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium'
    },
    cityTemp: {
        color: '#FFF',
        fontSize: 25,
        fontFamily: "Montserrat_700Bold"
    },
    cityImage: {
        width: 27,
        height: 24
    },
    inputContainer:{
        height: 46,
        width:'100%',
        backgroundColor: "rgba(255,255,255, 0.15)",
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16
    },
    input:{
        color: '#FFF',
        fontSize: 16,
        fontFamily: "Montserrat_500Medium",
    }
})

export default Cities;