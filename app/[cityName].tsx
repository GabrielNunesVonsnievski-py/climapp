import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const CityDetails = () => {
    const router = useRouter();
    const searchParams = useLocalSearchParams();
    const [cityDetails, setCityDetails] = useState(null);

    const handleData = async () => {
        try {
            const response = await fetch("https://climapp-api.vercel.app/api");
            const responseJSON = await response.json();

            const city = responseJSON.find(
                (cityData) => cityData.city === searchParams.cityName
            );
            setCityDetails(city);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        handleData();
    }, []);

    if (!cityDetails) {
        return (
            <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
                <View style={styles.loadingView}>
                    <Text style={styles.loadingText}>
                        Carregando...
                    </Text>
                </View>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient colors={["#00457D", "#05051F"]} style={styles.container}>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => {
                        router.back();
                    }} style={styles.headerIcon}>
                        <Ionicons name="chevron-back" size={24} color={"#FFF"} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>
                        {cityDetails.city.replace(",", " - ") ?? "Carregando..."}
                    </Text>

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardHeaderTitle}>Hoje</Text>
                            <Text style={styles.cardHeaderTitle}>{cityDetails.date ?? "Carregando..."}</Text>
                        </View>

                        <View style={styles.cardBox}>
                            <Image source={require("../assets/images/Vector.png")} style={styles.cardImage} />
                            <View>
                                <Text style={styles.cardTemperature}>{cityDetails.temp}º</Text>
                                <Text style={styles.cardDescription}>{cityDetails.description}</Text>
                            </View>
                        </View>

                        <View style={styles.rowBox}>
                            <View style={styles.row}>
                                <Image source={require("../assets/icons/iconeHumidade.png")} />
                                <Text style={styles.rowTitle}>Humidade:</Text>
                                <Text style={styles.rowValue}>{cityDetails.humidity}%</Text>
                            </View>

                            <View style={styles.row}>
                                <Image source={require("../assets/icons/iconeTemperatura.png")} />
                                <Text style={styles.rowTitle}>Min/Max:</Text>
                                <Text style={styles.rowValue}>{cityDetails.forecast[0].min}º / {cityDetails.forecast[0].max}º</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.weekCard}>
                        {cityDetails?.forecast.map((day) => (
                            <View key={day.date} style={styles.weekBox}>
                                <Text style={styles.weekTextTitle}>{day.weekday}</Text>
                                <Text style={styles.textDate}>({day.date}) {'\n'}</Text>
                                <Image source={require("../assets/images/Vector.png")} style={styles.weekCardeekCard}/>
                                <Text style={styles.weekText}> {day.max}º / {day.min}º</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 40,
        gap: 40,
    },
    headerContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    headerTitle: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "Montserrat_600SemiBold",
        textAlign: "center",
    },
    card: {
        width: "100%",
        borderRadius: 24,
        backgroundColor: "#4463D580",
        padding: 16,
        gap: 24,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
    },
    cardHeaderTitle: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Montserrat_600SemiBold",
    },
    headerIcon: {
        position: "absolute",
        left: 0,
        zIndex: 10,
    },
    cardImage: {
        width: 92,
        height: 84
    },
    cardTemperature: {
        color: '#FFF',
        fontSize: 43,
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center'
    },
    cardDescription: {
        color: '#FFF',
        fontSize: 13,
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'center'
    },
    cardBox: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    rowTitle: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Montserrat_600SemiBold',
    },
    rowValue: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
        marginLeft: 'auto'
    },
    rowBox: {
        gap: 8
    },
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingText: {
        color: '#FFF',
        fontSize: 24,
        fontFamily: 'Montserra_700Bold'
    },
    weekBox: {
        width: 110,
        height: 'auto',
        backgroundColor: '#FFFFFF15',
        borderRadius: 16,
        alignItems: 'center',
        margin: 8,
        padding: 8,
    },
    weekText: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Montserrat_600SemiBold'
    },
    weekTextTitle: {
        color: '#FFF',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Montserrat_500Medium'
    },
    textDate:{
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Montserrat_400Regular'
    },
    weekCard: {
        flexDirection: 'row',
        marginTop: 40,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
});

export default CityDetails;