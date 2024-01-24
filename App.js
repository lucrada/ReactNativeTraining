import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './components/header/Header';
import HorizontalScroller from './components/horizontal_scroller/HorizontalScroller';
import VerticalSpacer from './components/spacer/VerticalSpacer';
import Actions from './components/actions/Actions';

export default function App() {
  return (
    <View style={styles.container}>
      <Header name="John Doe" />
      <VerticalSpacer amount={20} />
      <HorizontalScroller />
      <VerticalSpacer amount={20} />
      <Actions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingHorizontal: 5,
  },
});