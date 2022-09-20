import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/styles';

function GroceriesSummary({ groceries, periodName }) {
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
    </View>
  );
}

export default GroceriesSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.accent500,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary800,
  },
});
