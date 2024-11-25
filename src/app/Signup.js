import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const Login = () => {
    const navigation = useNavigation();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignIn = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        router.navigate('dashboard');
    };

    return (
        <View style={styles.innerContainer}>
            <Text style={styles.signIn}>Sign Up</Text>

            <Text style={styles.label}>Full Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                placeholderTextColor="#999"
                value={fullName}
                onChangeText={setFullName}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                placeholderTextColor="#999"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F0F8FF', // Light background for a clean look
    },
    signIn: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#333', // Neutral color for readability
    },
    label: {
        fontSize: 16,
        color: '#555', // Subtle gray for the label text
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 45,
        borderColor: '#DADCE0',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF', // White for the input field
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#f4c2c2', // Soft pink color
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFFFFF', // White text on a blue button
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpText: {
        marginTop: 20,
        color: '#1A73E8', // Lighter blue for the link text
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
});

export default Login;
