import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Hello,</Text>
                    <Text style={styles.header}>
                        Tunisia Team{" "}
                        <Text style={{ fontSize: 22, marginTop: -10 }}>👋</Text>
                    </Text>
                </View>
                <Image
                    style={styles.logo}
                    source={{
                        uri: "https://cdn3.iconfinder.com/data/icons/business-avatars/128/avatar-10-512.png",
                    }}
                />
            </View>
            <View>
                <LinearGradient
                    // Background Linear Gradient
                    colors={["#c471ed", "#12c2e9"]}
                    style={styles.background}
                    // start={{ x: 0.05, y: 0.2 }}
                    // end={{ x: 1, y: 0.25 }}
                >
                    <View style={styles.cardText}>
                        <Text style={styles.Text1}>Total balance</Text>
                        <Text style={styles.Text2}>$ 415,38</Text>
                    </View>
                </LinearGradient>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
    },
    header: {
        fontSize: 32,
        fontWeight: "bold",
    },
    logo: {
        width: 66,
        height: 58,
    },
    background: {
        height: 85,
        marginTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 15,
        width: "85%",
        marginLeft: "7.5%",
    },
    cardText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
    },
    Text1: {
        fontSize: 16,
        color: "#fff",
    },
    Text2: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
});
