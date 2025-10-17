import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page from './Page';

type RootStackParamList = {
  Home: undefined;
  Page: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Home Screen</Text>
      <Button title="Go to Page" onPress={() => navigation.navigate('Page')} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page" component={Page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
