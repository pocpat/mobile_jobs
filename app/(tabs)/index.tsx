import 'react-native-reanimated';
import { Image, StyleSheet, Platform, View, SafeAreaView, Text } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, SIZES, icons, images } from '../../constants'; // Use relative path if `@` alias is not configured
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../../components'; // Use relative path
import {HelloWave} from '../../components/HelloWave';
import {ScrollView} from 'react-native'

export default function HomeScreen() {
  const router = useRouter();
  console.log('HomeScreen content is rendering');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Welcome to the Home Screen Content!</Text>
        <HelloWave />
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.medium, 
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10 
  }
});

// =============================== from example ========================================
{/* <ParallaxScrollView
headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
headerImage={
  <Image
    source={require('@/assets/images/partial-react-logo.png')}
    style={styles.reactLogo}
  />
}>
<ThemedView style={styles.titleContainer}>
  <ThemedText type="title">Welcome!</ThemedText>
  <HelloWave />
</ThemedView>
<ThemedView style={styles.stepContainer}>
  <ThemedText type="subtitle">Step 1: Try it</ThemedText>
  <ThemedText>
    Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    Press{' '}
    <ThemedText type="defaultSemiBold">
      {Platform.select({
        ios: 'cmd + d',
        android: 'cmd + m',
        web: 'F12'
      })}
    </ThemedText>{' '}
    to open developer tools.
  </ThemedText>
</ThemedView>
<ThemedView style={styles.stepContainer}>
  <ThemedText type="subtitle">Step 2: Explore</ThemedText>
  <ThemedText>
    Tap the Explore tab to learn more about what's included in this starter app.
  </ThemedText>
</ThemedView>
<ThemedView style={styles.stepContainer}>
  <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
  <ThemedText>
    When you're ready, run{' '}
    <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    <ThemedText type="defaultSemiBold">app-example</ThemedText>.
  </ThemedText>
</ThemedView>
</ParallaxScrollView> */}