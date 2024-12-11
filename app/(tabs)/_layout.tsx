import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import DollarIcon from '@/components/icons/DollarIcon';
import HomeIcon from '@/components/icons/HomeIcon';
import ListIcon from '@/components/icons/ListIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const width = 25
  const height = 25


  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            borderRadius: 16,
            marginHorizontal: 16,
            marginBottom: 16,
            position: 'absolute',
            height: 60,
          },
          tabBarActiveTintColor: '#024CAA',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarShowLabel: true,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color }) => (
              <HomeIcon width={width} height={height} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Gastos',
            tabBarIcon: ({ color }) => (
              <ListIcon width={width} height={height} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="formulario"
          options={{
            title: 'Nuevo Gasto',
            tabBarIcon: ({ color }) => (
              <DollarIcon width={width} height={height} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}