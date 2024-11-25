//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// create a component
const LoginScreen = (props) => {
    useEffect(() => {
        SplashScreen.hide()
      }, [])    
    return (
        <View style={styles.container}>
            <Text>LoginScreen  </Text>
            <Button
                onPress={()=>{
                    props.navigation.navigate("Signup")
                }}
                title="Go to Signup"
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
export default LoginScreen;
