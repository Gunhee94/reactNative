import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
 
export default function App() {

    return (
        <View style={styles.container} >
            <StatusBar style="auto" />
            <View style={styles.bar}>
                <Text style={styles.title}>귀여운거</Text>
                <FontAwesome5 style={styles.hambuger} name="bars" size={30} color="black" />
            </View>
            
            <View style={styles.body}>
                <Text>dddd</Text>
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
        padding: 20,
    },
    title: {
        fontSize: 30,
        flex: 1,
    },
    hambuger: {
        felx: 1,
    },
    body: {
        flex: 9.5,
        backgroundColor: "white",
    },
});
