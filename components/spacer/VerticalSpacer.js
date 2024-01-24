import { View } from 'react-native';

export default function VerticalSpacer(props) {
    return (
        <View style={{ marginTop: props.amount }}></View>
    );
}