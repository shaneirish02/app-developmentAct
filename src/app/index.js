import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to my Page</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPassword')}
                >
                    <Text style={styles.linkText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F8FF', // Light blue background for a refreshing look
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333333', // Dark gray for strong readability
        marginBottom: 50,
    },
    buttonContainer: {
        width: '80%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FFFFFF', 
        paddingVertical: 15,
        width: '100%',
        borderRadius: 8, 
        alignItems: 'center',
        marginBottom: 15,
        elevation: 2, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    buttonSecondary: {
        backgroundColor: '#FFFFFF', 
        borderColor: '#CCCCCC', 
        borderWidth: 1,
    },
    buttonText: {
        color: '#333333', 
        fontSize: 16,
        fontWeight: '600',
    },
    buttonTextSecondary: {
        color: '#666666', 
    },
    linkText: {
        color: '#1E90FF', 
        fontSize: 14,
        marginTop: 15,
        textDecorationLine: 'underline',
    },
});

export default Welcome;
