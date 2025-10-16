import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Switch,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import PlatformButton from '../components/PlatformButton';
import { getCurrentPlatformColors, isIOS } from '../utils/platform';

const SettingsScreen = () => {
  const colors = getCurrentPlatformColors();

  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    locationServices: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderSettingRow = (title, description, value, settingKey) => (
    <View style={styles.settingRow}>
      <View style={styles.settingInfo}>
        <Text style={[styles.settingTitle, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.settingDescription, { color: colors.text }]}>
          {description}
        </Text>
      </View>
      <Switch
        value={value}
        onValueChange={() => toggleSetting(settingKey)}
        trackColor={{ false: '#767577', true: colors.primary }}
        thumbColor={isIOS ? '#ffffff' : value ? colors.primary : '#f4f3f4'}
      />
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={isIOS ? 'dark-content' : 'light-content'}
        backgroundColor={isIOS ? undefined : colors.primary}
      />

      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: isIOS ? colors.background : colors.primary },
        ]}
      >
        <Text style={[styles.headerTitle, { color: isIOS ? colors.text : '#ffffff' }]}>
          Settings
        </Text>
        <Text
          style={[styles.headerSubtitle, { color: isIOS ? colors.text : '#ffffff' }]}
        >
          {isIOS ? 'iOS Style' : 'Android Style'}
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* General Settings */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>General</Text>
          <View style={[styles.sectionContent, { backgroundColor: '#ffffff' }]}>
            {renderSettingRow(
              'Push Notifications',
              'Receive app notifications',
              settings.notifications,
              'notifications',
            )}
            {renderSettingRow(
              'Dark Mode',
              'Use dark theme',
              settings.darkMode,
              'darkMode',
            )}
            {renderSettingRow(
              'Location Services',
              'Allow location access',
              settings.locationServices,
              'locationServices',
            )}
          </View>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>About</Text>
          <View style={styles.sectionContent}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Platform</Text>
              <Text style={styles.infoValue}>{Platform.OS}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Version</Text>
              <Text style={styles.infoValue}>1.0.0</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.section}>
          <PlatformButton
            title="Save Changes"
            variant="primary"
            onPress={() => Alert.alert('Saved', 'Settings have been saved!')}
          />
          <View style={styles.buttonSpacing} />
          <PlatformButton
            title="Reset Defaults"
            variant="secondary"
            onPress={() => Alert.alert('Reset', 'Settings reset to defaults!')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: isIOS ? 34 : 24,
    fontWeight: '700',
  },
  headerSubtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  sectionContent: {
    borderRadius: 8,
    padding: 12,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
  },
  settingInfo: {
    flex: 1,
    marginRight: 12,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  settingDescription: {
    fontSize: 14,
    opacity: 0.7,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0',
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
  },
  buttonSpacing: {
    height: 12,
  },
});

export default SettingsScreen;
