---
sidebar_position: 2
---

# Installation

### Create your React Native project
If you don't already have a project started, you can get started with a brand new React Native project by following the [React Native setup guide](https://reactnative.dev/docs/environment-setup).

### Install the package
Install the package into your React Native project by running the following from the your project.

```sh
npm install react-native-activitykit

or

yarn add react-native-activitykit
```

### Creating your Widget Extension
If you project doesn't already have a WidgetKit Extension, you'll need to create one. The setup process will include the following rough steps:

1. Open up your iOS project inside of **Xcode**
2. Create a new **Extension Target** for **WidgetKit**
3. Add an **ActivityConfiguration** to your **WidgetConfiguration**

For instructions on setting up your WidgetKit Extension, check out Apple's documentation for [Widgkit](https://developer.apple.com/documentation/WidgetKit) and [Creating a Widget Extension](https://developer.apple.com/documentation/WidgetKit/Creating-a-Widget-Extension)

For instructions on setting up the **ActivityConfiguration** in your **Widget Extension**, check out Apple's documentation for [ActivityKit](https://developer.apple.com/documentation/activitykit) and [Displaying live data with Live Activities](https://developer.apple.com/documentation/activitykit/displaying-live-data-with-live-activities).

### Update your Podfile
Once your Widget Extensino is created, you will need to update your Podfile in order to install the Native dependencies.

Open up your Podfile inside of your iOS directory (`ios/Podfile`) and add the following lines at the bottom.

```
target 'ReactNativeActivityKitExampleWidgetExtension' do
  pod 'ReactNativeActivityKitXC', :path => "../.."
end
```
Make sure to replace `ReactNativeActivityKitExampleWidgetExtension` with the name of your **Widget Extension**. You can find this pressing on your main project inside of Xcode and reviewing the list of **targets**.
