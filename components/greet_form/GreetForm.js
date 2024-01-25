import { TextInput, Button, View, Alert } from 'react-native';
import React from 'react';
import styles from './Style';

export default function GreetForm() {
    [name, setName] = React.useState('');

    function greet() {
        if (name == '') {
            Alert.alert("Name not found", "Please enter a name first", [{ title: "Ok", onPress: () => console.log("ok pressed") }]);
            return;
        }

        Alert.alert("Greetings", "Welcome " + name,
            [
                { title: "Ok", onPress: () => console.log("ok pressed") },
            ]
        );
    }

    return (
        <View style={styles.button_wrapper}>
            <TextInput placeholder="Enter your name" onChangeText={text => setName(text)} value={name} style={styles.txt_inp} />
            <Button onPress={greet} title="Greet Me" style={styles.btn} color="crimson" accessibilityLabel="Press here so that nothing happens" />
        </View>
    );
}