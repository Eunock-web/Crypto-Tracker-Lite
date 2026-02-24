import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: " #0D0F14",
        tabBarInactiveTintColor: "#6C63FF",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1A1D27"
        },
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />

    </Tabs>
  );
}
