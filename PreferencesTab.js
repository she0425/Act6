import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { PreferenceContext } from './PreferenceContext';
import { styles } from './styles';

export default function PreferencesTab() {
  const { darkMode, toggleDarkMode } = useContext(PreferenceContext);

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#222' : '#fff' }]}>
      <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>Preferences</Text>
      <View style={styles.box}>
        <Text style={styles.text}>Customize your app experience across tabs.</Text>
        <Button 
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} 
          onPress={toggleDarkMode} 
        />
      </View>
    </View>
  );
}