import { FlatList, View, Text } from 'react-native';
import styles from './Style';
import React from 'react';

export default function List() {
    function useFetch(url) {
        const [data, setData] = React.useState([]);

        React.useEffect(() => {
            fetch(url).then(res => res.json()).then(data => setData(data));
        }, []);

        return [data.slice(0, 5)];
    }

    let [DATA] = useFetch('https://jsonplaceholder.typicode.com/todos');

    function Item(props) {
        return (
            <View style={styles.list}>
                <Text style={styles.list_title}>{props.title}</Text>
                <Text style={styles.list_content}>{props.content}</Text>
            </View>
        );
    }

    return (
        <View>
            <Text style={{ fontSize: 25, marginBottom: 10, fontWeight: "bold", textAlign: "center", color: "teal" }}>This is a Flat List</Text>
            <FlatList data={DATA} keyExtractor={item => item.id} renderItem={({ item }) => <Item title={item.title} content={item.content} />} />
        </View>
    );
}