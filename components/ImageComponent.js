import { View, Image, StyleSheet, Dimensions } from "react-native";

export default function ImageComponent(props) {
    const WINDOW_WIDTH = Dimensions.get("window").width;

    return (
        <View style={stylesImage(WINDOW_WIDTH).imageBox}>
            <Image
                source={require("../assets/images/" + props.data + props.index + ".png")}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
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
