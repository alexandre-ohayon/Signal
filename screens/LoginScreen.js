import React, { useState } from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signIn = () => {} 

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
        <Image source={{
            uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200}}
        />
        <View style={styles.inputContainer}>
            <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={text => setEmail(text)} />
            <Input 
            placeholder="Password" 
            secureTextEntry 
            type="password" 
            value={password} 
            onChangeText={text => setPassword(text)} />
        </View>

        <Button containerStyle={styles.button} onPress={signIn} title="Se connecter"/>
        <Button onPress={() => navigation.navigate("S'enregistrer")} containerStyle={styles.button} type="outline" title="S'enregistrer"/>
        <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding:10,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
