import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { PreferenceContext } from './PreferenceContext';
import { styles } from './styles';

export default function DashboardTab() {
  const { darkMode, isLoading } = useContext(PreferenceContext);

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#222' : '#fff' }]}>
      <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>Dashboard</Text>
      <View style={styles.box}>
        {isLoading ? (
          <Text style={styles.text}>Saving preferences...</Text>
        ) : (
          <Text style={styles.text}>
            Current Theme Mode: {darkMode ? "Dark Mode" : "Light Mode"}
          </Text>
        )}
      </View>
    </View>
  );
}
