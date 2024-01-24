import { View, Text, Image } from 'react-native';
import styles from './Styles';

export default function Actions(props) {
    return (
        <View style={styles.actionContainer}>
            <Text style={styles.title}>Quick Action</Text>
            <View style={styles.col}>
                <View style={styles.row}>
                    <View style={styles.item}>
                        <Image style={styles.item_image} source={require("../../assets/images/add.png")} />
                        <Text style={styles.item_title}>Add</Text>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.item_image} source={require("../../assets/images/analytics.png")} />
                        <Text style={styles.item_title}>Analytics</Text>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.item_image} source={require("../../assets/images/connect.png")} />
                        <Text style={styles.item_title}>Connect</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.item}>
                        <Image style={styles.item_image} source={require("../../assets/images/money.png")} />
                        <Text style={styles.item_title}>Money</Text>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.item_image} source={require("../../assets/images/settings.png")} />
                        <Text style={styles.item_title}>Settings</Text>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.item_image} source={require("../../assets/images/wallet.png")} />
                        <Text style={styles.item_title}>Wallet</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}