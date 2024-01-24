import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';

export default function Header(props) {
    return (
        <View style={styles.header}>
            <View style={styles.row}>
                <Image style={styles.avatar} source={require("../../assets/images/avatar.png")} />
                <View style={styles.info}>
                    <Text style={styles.info_welcome}>Welcome</Text>
                    <Text style={styles.info_name}>{props.name}</Text>
                </View>
            </View>
            <Image style={styles.notifications} source={require('../../assets/images/bell.png')} />
        </View>
    );
}