PlatformSettingsApp — Lab 5 Summary

This project was built for CPAN 213 – Cross-Platform Mobile Application Development.
It demonstrates how to create platform-specific user interfaces in React Native for both iOS and Android.

The app displays a customizable Settings Screen that adapts its design to each operating system.
It includes:

A reusable PlatformButton component implemented separately for iOS and Android (.ios.js / .android.js)

Platform-specific styling using Platform.select() and Platform.OS

Shared color themes and layout via utils/platform.js

Key differences implemented:

iOS → 12 pt rounded corners, drop shadows, large titles, normal-case text

Android → 4 pt corners, elevation, smaller header, UPPERCASE text

Technologies: React Native 0.74, Node 20 LTS, Android Studio, Expo Go (for iOS testing)

Learning outcome:
Understanding how React Native bridges design guidelines of both platforms while keeping a unified codebase.
This lab reinforced component reuse, platform detection, and clean project organization in cross-platform development.
