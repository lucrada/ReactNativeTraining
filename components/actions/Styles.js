import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    actionContainer: {
        flexDirection: "column",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#eee",
        padding: 6
    },
    title: {
        fontWeight: "bold",
        fontSize: 22,
        marginLeft: 10,
    },
    col: {
        marginTop: 30,
        flexDirection: "column",
        justifyContent: "space-around",
        height: 250,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    item: {
        backgroundColor: "#006992",
        padding: 10,
        width: 100,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    item_image: {
        width: 50,
        height: 50
    },
    item_title: {
        color: "#fff",
        fontSize: 15,
        marginTop: 14,
        fontWeight: "bold",
    }
});