```javascript
import React, { useMemo } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const data = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

const FlatListBugSolution = () => {
  // Use useMemo to optimize the rendering of the item components
  const memoizedItems = useMemo(() => {
    return data.map((item, index) => (
      <View key={index} style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ));
  }, [data]);

  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => memoizedItems[index] }
      keyExtractor={(item, index) => index.toString()}
      />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FlatListBugSolution;
```