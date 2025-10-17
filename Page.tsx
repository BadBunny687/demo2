import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Page({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>This is Page.tsx</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
