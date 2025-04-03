import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "../../components/HapticTab";
import { IconSymbol } from "../../components/ui/IconSymbol";
import TabBarBackground from "../../components/ui/TabBarBackground";
import { Colors } from "../../constants/Colors";
import { useColorScheme } from "../../hooks/useColorScheme";

import { ScreenHeaderBtn } from "../../components";
import { COLORS, icons } from "../../constants"; // Corrected import path


export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Home",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" handlePress={() => console.log('Menu pressed')} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension={60} handlePress={() => console.log('Profile pressed')} />
          ),
        }}
      />
    </Tabs>
  );
}