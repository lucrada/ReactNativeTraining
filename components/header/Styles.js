import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 10,
    },
    avatar: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
    info: {
        justifyContent: "center",
    },
    info_welcome: {
        fontColor: "#eee",
        fontSize: 10,
    },
    info_name: {
        fontColor: "#000",
        fontSize: 15,
        fontWeight: "bold"
    },
    notifications: {
        height: 30,
        width: 30,
    }
});