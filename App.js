import { StatusBar } from "expo-status-bar";
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

export default function App() {
    const WINDOW_WIDTH = Dimensions.get("window").width;

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: "보기1", value: "1" },
        { label: "보기2", value: "2" },
    ]);

    console.log("gunheeLog");

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.bar}>
                <Entypo style={styles.title} name="baidu" size={35} color="#c86e37" />
                <FontAwesome5 style={styles.hambuger} name="bars" size={30} color="black" />
            </View>
            <View style={styles.line} />
            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.manipulation}>
                        <TouchableOpacity
                            style={styles.category}
                            onPress={() => console.log("gunhee")}
                        >
                            <Text>전체</Text>
                            <MaterialIcons name="filter-alt" size={24} color="black" />
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                                style={styles.sorts}
                                onPress={() => console.log("gunhee")}
                            >
                                <Text>정렬</Text>
                                <MaterialCommunityIcons name="sort" size={24} color="black" />
                            </TouchableOpacity> */}
                        <View style={styles.sorts}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                placeholder="정렬"
                            />
                        </View>
                    </View>
                    <View style={styles.imageAll}>
                        <View style={stylesImage(WINDOW_WIDTH).imageBox}>
                            <Image
                                source={require("./assets/images/리트리버.png")}
                                style={styles.image}
                            />
                        </View>
                        <View style={stylesImage(WINDOW_WIDTH).imageBox}>
                            <Image
                                source={require("./assets/images/리트리버.png")}
                                style={styles.image}
                            />
                        </View>
                        <View style={stylesImage(WINDOW_WIDTH).imageBox}>
                            <Image
                                source={require("./assets/images/리트리버.png")}
                                style={styles.image}
                            />
                        </View>
                        <View style={stylesImage(WINDOW_WIDTH).imageBox}>
                            <Image
                                source={require("./assets/images/리트리버.png")}
                                style={styles.image}
                            />
                        </View>
                        <View style={stylesImage(WINDOW_WIDTH).imageBox}>
                            <Image
                                source={require("./assets/images/리트리버.png")}
                                style={styles.image}
                            />
                        </View>
                        <View style={stylesImage(WINDOW_WIDTH).imageBox}>
                            <Image
                                source={require("./assets/images/리트리버.png")}
                                style={styles.image}
                            />
                        </View>
                        <View style={stylesImage(WINDOW_WIDTH).imageBox}>
                            <Image
                                source={require("./assets/images/리트리버.png")}
                                style={styles.image}
                            />
                        </View>
                        <View style={stylesImage(WINDOW_WIDTH).imageBox}>
                            <Image
                                source={require("./assets/images/리트리버.png")}
                                style={styles.image}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
            {/* <Entypo name="baidu" size={100} color="white" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        flexDirection: "column",
        backgroundColor: "#c86e37",
    },
    bar: {
        flex: 0.5,
        backgroundColor: "white",
        flexDirection: "row",
        padding: 15,
    },
    title: {
        flex: 1,
    },
    hambuger: {
        felx: 1,
    },
    line: {
        borderWidth: 1,
        borderColor: "lightgray",
    },
    body: {
        flex: 9.5,
        backgroundColor: "white",
        flexDirection: "column",
    },
    manipulation: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    category: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 10,
        padding: 5,
        alignItems: "center",
    },
    sorts: {
        flexDirection: "row",
        padding: 5,
        alignItems: "center",
    },
    imageAll: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
    },

    image: {
        width: "100%",
        height: "100%",
        // minHeight: "190px",
        // minWidth: "190px",
    },
});

const stylesImage = (width) =>
    StyleSheet.create({
        imageBox: {
            padding: 1,
            width: "50%",
            height: width / 2,
        },
    });
