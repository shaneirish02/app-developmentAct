import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hi, Welcome to My Home Page!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E3F2FD", // Soft blue background
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
    },
});

export default Home;
