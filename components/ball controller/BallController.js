import { View, Animated, Button } from 'react-native';
import React from 'react';

export default function BallController() {
    y_cord = React.useState(new Animated.Value(0))[0];
    x_cord = React.useState(new Animated.Value(0))[0];

    function moveUp() {
        Animated.timing(y_cord, {
            toValue: 260,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }

    function moveDown() {
        Animated.timing(y_cord, {
            toValue: -450,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }

    function moveRight() {
        Animated.timing(x_cord, {
            toValue: 250,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }

    function moveLeft() {
        Animated.timing(x_cord, {
            toValue: -250,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }

    function bringCenter() {
        Animated.timing(x_cord, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
        Animated.timing(y_cord, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }

    return (
        <View>
            <View style={{ flex: 1, height: 700, justifyContent: "center", alignItems: "center", backgroundColor: '#333', borderRadius: 10, }}>
                <Animated.View style={{ backgroundColor: 'red', borderRadius: 50, width: 100, height: 100, marginBottom: y_cord, marginLeft: x_cord }}>
                </Animated.View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 30, marginTop: 10, justifyContent: 'space-around' }}>
                <Button onPress={moveUp} title="Move up" />
                <Button onPress={moveDown} title="Move down" />
            </View>
            <View style={{ width: 150, alignSelf: 'center' }}>
                <Button title="Bring to center" onPress={bringCenter} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 30, marginTop: 30, justifyContent: 'space-around' }}>
                <Button onPress={moveRight} title="Move right" />
                <Button onPress={moveLeft} title="Move left" />
            </View>
        </View>
    );
}