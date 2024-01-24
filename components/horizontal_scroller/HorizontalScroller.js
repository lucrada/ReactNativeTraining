import { ScrollView, View, Text } from 'react-native';
import styles from './Styles';

export default function HorizontalScroller(props) {
    return (
        <ScrollView style={styles.scrollView} horizontal={true}>
            <View style={styles.card}><Text style={styles.card_item}>Some Content</Text></View>
            <View style={styles.card}><Text style={styles.card_item}>Some Content</Text></View>
            <View style={styles.card}><Text style={styles.card_item}>Some Content</Text></View>
            <View style={styles.card}><Text style={styles.card_item}>Some Content</Text></View>
            <View style={styles.card}><Text style={styles.card_item}>Some Content</Text></View>
            <View style={styles.card}><Text style={styles.card_item}>Some Content</Text></View>
            <View style={styles.card}><Text style={styles.card_item}>Some Content</Text></View>
            <View style={styles.card}><Text style={styles.card_item}>Some Content</Text></View>
        </ScrollView>
    );
}