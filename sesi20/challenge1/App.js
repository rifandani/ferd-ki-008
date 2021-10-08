import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';

import CustomersScreen from './screens/CustomersScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <CustomersScreen />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
