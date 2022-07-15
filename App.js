import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
    return (
        <View style={styles.SendMoney}>
            <View style={styles.Group247}>
                <View style={styles.IphoneXsBarsStatusDefault}>
                    <View style={styles.Action}>
                        {/* <Text style={styles.Txt758}>9:41</Text> */}
                    </View>
                    <Image
                        style={styles.Container}
                        // source={{
                        //     uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/skhlt8w5ds-43%3A5199?alt=media&token=56df230e-2650-40bc-a667-12b5d5df13e7",
                        // }}
                    />
                </View>
                <View style={styles.Group1000000941}>
                    <View style={styles.TabBar}>
                        <Image
                            style={styles.Group42}
                            // source={{
                            //     uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/skhlt8w5ds-43%3A5217?alt=media&token=f8770025-25f2-4147-aa7d-d68b26c3a752",
                            // }}
                        />
                        <Text style={styles.Txt742}>Send Money</Text>
                    </View>
                    <View style={styles.Name}>
                        <Text style={styles.Txt276}>Name</Text>
                        <View style={styles.Group1000000858}>
                            <View style={styles.Group1000000857}>
                                <Image
                                    style={styles.UserUserProfile}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/skhlt8w5ds-43%3A5237?alt=media&token=e799ecf6-6f0d-47cf-9810-992961c1e9c7",
                                    }}
                                />
                                <SafeAreaView>
                                    <TextInput
                                        style={styles.input}
                                        // value={number}
                                        placeholder="Name"
                                        // keyboardType="numeric"
                                    />
                                </SafeAreaView>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Name}>
                        <Text style={styles.Txt276}>Email Address</Text>
                        <View style={styles.Group1000000860}>
                            <View style={styles.Group1000000857}>
                                <Image
                                    style={styles.UserUserProfile}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/skhlt8w5ds-43%3A5243?alt=media&token=53782459-1548-4239-9dd3-6ac859c03b43",
                                    }}
                                />
                                <SafeAreaView>
                                    <TextInput
                                        style={styles.input}
                                        // value={number}
                                        placeholder="Email Address"
                                        // keyboardType="numeric"
                                    />
                                </SafeAreaView>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Name}>
                        <Text style={styles.Txt276}>Description</Text>
                        <View style={styles.Group1000000858}>
                            <View style={styles.Group1000000857}>
                                <Image
                                    style={styles.UserUserProfile}
                                    source={{
                                        uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/skhlt8w5ds-43%3A5257?alt=media&token=dbb90e02-e403-4b46-9bd9-affba06ffb2a",
                                    }}
                                />
                                <SafeAreaView>
                                    <TextInput
                                        style={styles.input}
                                        // value={number}
                                        placeholder="Description...."
                                    />
                                </SafeAreaView>
                            </View>
                        </View>
                    </View>

                    <View style={styles.UsdCart}>
                        <View style={styles.Group1000000941}>
                            <View style={styles.Group578}>
                                <Text style={styles.Txt505}>
                                    Enter Your Amount
                                </Text>
                            </View>
                            <View style={styles.Group1000000857}>
                                <SafeAreaView>
                                    <TextInput
                                        style={styles.input}
                                        // value={number}
                                        placeholder="Your Amount"
                                        keyboardType="numeric"
                                    />
                                </SafeAreaView>
                                <Text style={styles.Txt413}>USD</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Frame8}>
                        <Text style={styles.Txt094}>Send Money</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
    },
    SendMoney: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 0,
        paddingBottom: 49,
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: 375,
        height: 812,
    },
    Group247: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    IphoneXsBarsStatusDefault: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 13,
        paddingBottom: 11,
        paddingLeft: 24,
        paddingRight: 8,
        marginBottom: 10,
    },
    Action: {
        marginRight: 244,
        width: 30,
        height: 18,
    },
    Txt758: {
        fontSize: 15,
        fontFamily: "SF Pro Display, sans-serif",
        fontWeight: "600",
        lineHeight: 18,
        letterSpacing: -0.2,
        color: "rgba(30,30,45,1)",
        textAlign: "center",
        justifyContent: "center",
    },

    Container: {
        width: 67,
        height: 11.5,
    },

    Group1000000941: {
        display: "flex",
        flexDirection: "column",
    },
    TabBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32,
    },
    Group42: {
        width: 42,
        height: 42,
        marginRight: 55,
    },
    Txt742: {
        fontSize: 18,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "500",
        lineHeight: 18,
        color: "rgba(30,30,45,1)",
        textAlign: "center",
        justifyContent: "center",
    },

    Name: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 22,
    },
    Txt276: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 14,
        color: "rgba(162,162,167,1)",
        marginBottom: 15,
    },
    Group1000000858: {
        paddingTop: 0,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 187,
        width: 335,
        height: 32,
    },
    Group1000000857: {
        display: "flex",
        flexDirection: "row",
    },
    UserUserProfile: {
        width: 22,
        height: 22,
        marginRight: 16,
    },
    Txt5310: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 14,
        color: "rgba(30,30,45,1)",
    },

    Name: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 22,
    },
    Txt276: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 14,
        color: "#000",
        marginBottom: 15,
    },
    Group1000000860: {
        paddingTop: 0,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 98,
        width: 335,
        height: 32,
    },
    Group1000000857: {
        display: "flex",
        flexDirection: "row",
    },
    UserUserProfile: {
        width: 22,
        height: 22,
        marginRight: 16,
    },
    Txt471: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 14,
        color: "rgba(30,30,45,1)",
        textTransform: "lowercase",
    },

    Name: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 22,
    },
    Txt276: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 14,
        color: "rgba(162,162,167,1)",
        marginBottom: 15,
    },
    Group1000000858: {
        paddingTop: 0,
        paddingBottom: 10,
        paddingLeft: 0,
        paddingRight: 187,
        width: 335,
        height: 32,
    },
    Group1000000857: {
        display: "flex",
        flexDirection: "row",
    },
    UserUserProfile: {
        width: 22,
        height: 22,
        marginRight: 16,
    },
    Txt1024: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 14,
        color: "rgba(30,30,45,1)",
        textTransform: "capitalize",
    },

    MonthlyDueBy: {
        display: "flex",
        flexDirection: "column",
        marginBottom: 30,
    },
    Txt276: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 14,
        color: "rgba(162,162,167,1)",
        marginBottom: 15,
    },
    Group1000000857: {
        display: "flex",
        flexDirection: "row",
    },
    Group1000000865: {
        paddingTop: 0,
        paddingBottom: 9,
        paddingLeft: 33,
        paddingRight: 31.5,
        marginRight: 43,
        width: 82.5,
        height: 24,
    },
    Txt471: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 14,
        color: "rgba(30,30,45,1)",
        textTransform: "lowercase",
    },

    Group1000000866: {
        paddingTop: 0,
        paddingBottom: 9,
        paddingLeft: 32,
        paddingRight: 31.5,
        marginRight: 44,
        width: 82.5,
        height: 24,
    },
    Txt1024: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 14,
        color: "rgba(30,30,45,1)",
        textTransform: "capitalize",
    },

    Group1000000867: {
        paddingTop: 0,
        paddingBottom: 9,
        paddingLeft: 24,
        paddingRight: 22,
        width: 82,
        height: 24,
    },
    Txt918: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 14,
        color: "rgba(30,30,45,1)",
        width: 36,
        textTransform: "capitalize",
    },

    UsdCart: {
        paddingTop: 29,
        paddingBottom: 29,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 126,
        marginLeft: -5,
        borderRadius: 14,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(231,234,238,1)",
        width: 335,
        height: 116,
    },
    Group1000000941: {
        display: "flex",
        flexDirection: "column",
    },
    Group578: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 20,
    },
    Txt505: {
        fontSize: 11,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 11,
        color: "rgba(126,132,141,1)",
        textAlign: "center",
        justifyContent: "center",
        marginRight: 96,
    },
    Txt362: {
        fontSize: 11,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        lineHeight: 11,
        color: "rgba(255,63,96,1)",
        textAlign: "center",
        justifyContent: "center",
    },

    Group1000000857: {
        display: "flex",
        flexDirection: "row",
    },
    Txt413: {
        fontSize: 14,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        lineHeight: 24,
        color: "rgba(155,178,212,1)",
        textAlign: "center",
        justifyContent: "center",
        marginLeft: 5,
        marginTop: 2,
    },
    Txt643: {
        fontSize: 24,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        lineHeight: 24,
        color: "rgba(30,30,45,1)",
    },

    Frame8: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: -5,
        paddingTop: 15,
        paddingBottom: 15,
        // paddingLeft: 156,
        // paddingRight: 156,
        borderRadius: 16,
        backgroundColor: "rgba(0,102,255,1)",
        width: 335,
    },
    Txt094: {
        fontSize: 16,
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        lineHeight: 24,
        color: "rgba(255, 255, 255, 1)",
        textAlign: "center",
        justifyContent: "center",
    },
});
