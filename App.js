import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Header from './components/header/Header';
import HorizontalScroller from './components/horizontal_scroller/HorizontalScroller';
import VerticalSpacer from './components/spacer/VerticalSpacer';
import Actions from './components/actions/Actions';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Header name="John Doe" />
      <VerticalSpacer amount={20} />
      <HorizontalScroller />
      <VerticalSpacer amount={20} />
      <Actions />
      <VerticalSpacer amount={20} />
      <HorizontalScroller />
      <VerticalSpacer amount={20} />
      <Actions />
      <VerticalSpacer amount={20} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    paddingHorizontal: 5,
  },
});