//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from '../../../services/AuthContext/AuthContext';

// create a component
const SignupScreen = (props) => {
    const { login } = useAuth(); 

    const handleSignup = async () => {
        const newToken = 'your_generated_token'; // Simulate a successful signup and token retrieval
        login(newToken); // Store the token and mark as authenticated
        };
        
    return (
        <View style={styles.container}>
            <Text>SignupScreen  </Text>
            <Button
                onPress={handleSignup}
                title="Gp to home screen"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <Button
                onPress={() => {
                    props.navigation.goBack()
                }}
                title="back to the login screen"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SignupScreen;
