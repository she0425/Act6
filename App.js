import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PreferenceProvider } from './PreferenceContext';
import DashboardTab from './DashboardTab';
import PreferencesTab from './PreferencesTab';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PreferenceProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Dashboard">
          <Tab.Screen name="Dashboard" component={DashboardTab} options={{ title: 'Home' }} />
          <Tab.Screen name="Preferences" component={PreferencesTab} options={{ title: 'Settings' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PreferenceProvider>
  );
}