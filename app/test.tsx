import { Stack } from 'expo-router';
import { SafeAreaView, Text } from 'react-native';
import { ScreenHeaderBtn } from '@/components';
import { icons } from '../constants/icons';

export default function TestScreen() {
    console.log(icons);
  return (
    <SafeAreaView>
      {/* <Stack.Screen
        options={{
          headerStyle: { backgroundColor: 'blue' },
          headerShadowVisible: true,
          headerLeft: () => <Text>Left</Text>,
          headerRight: () => <Text>Right</Text>,
          headerTitle: "Test Header",
        }}
      /> */}
     <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
      <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
      <Text>Test Screen</Text>   
       </SafeAreaView>
  );
}