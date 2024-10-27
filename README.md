# Navigation Sample

## 1. Create Expo application

- Visit [Expo/Docs](https://docs.expo.dev/get-started/create-a-project/) to learn how to create Expo application
- Create empty template using `--template`
- Install additional libraries to run in web mode

```bash
npx create-expo-app@latest --template

npx expo install react-native-web react-dom @expo/metro-runtime
```

```bash
npx expo install `
react-native-web `
react-dom `
@expo/metro-runtime
```

## 2. Install Additional Packages

- Visit [Expo Vector Icons](https://docs.expo.dev/guides/icons/) to learn more about icons set
- Visit [icons.expo.fyi](https://icons.expo.fyi/Index) to browse `@expo/vector-icons` icons set
- Visit [React Native Paper](https://reactnativepaper.com/)

```bash
npx expo install @expo/vector-icons
npx expo install react-native-paper
```

```bash
npx expo install `
@expo/vector-icons `
react-native-paper
```

## 3. Install React Navigator

- Visit [React Navigator](https://reactnavigation.org/) to learn how to install React Navigator
- Install [Tabs Navigator](https://reactnavigation.org/docs/tab-based-navigation)
- Install [Stack Navigator](https://reactnavigation.org/docs/stack-navigator)
- Install dependencies into an Expo managed project

```bash
npx expo install @react-navigation/native

npx expo install @react-navigation/bottom-tabs

npx expo install @react-navigation/stack

npx expo install react-native-screens react-native-safe-area-context
```

```bash
# Powershell
npx expo install `
@react-navigation/native `
@react-navigation/bottom-tabs `
@react-navigation/stack `
react-native-screens `
react-native-safe-area-context
```

```bash
# DOS
npx expo install ^
@react-navigation/native ^
@react-navigation/bottom-tabs ^
@react-navigation/stack ^
react-native-screens ^
react-native-safe-area-context
```

## 4. Start the app

```bash
npm run web
```

## 5. Create folders

```bash
|
|- components
|- navigation
|- screens
|- styles
|- constants
|- utils
```

## 6. Create files

```bash
|- screens
    |- LoginScreen.js
    |- SignUpScreen.js
    |- ErrorScreen.js
    |- HelpScreen.js
    |- NotFoundScreen.js
    |- HomeScreen.js
    |- SettingsScreen.js
    |- ProfileListScreen.js
    |- ProfileViewScreen.js
    |- ProfileEditScreen.js
    |- ProfileNewScreen.js

|- navigation
    |- RootNavigator.js
    |- MainNavigator.js
    |- ProfileNavigator.js

|- components
```

## 7. File Naming

- **PascalCase** for screens, components, and navigators
- **lowercase** for folders
- Use **Screen** suffix for screens like `LoginScreen`
- Use **Navigator** suffix for navigators like `RootNavigator`

## 8. Package.JSON

- You should have `package.json` like this in your project folder

```javascript
{
  "name": "my-expo-paper-2",
  "version": "1.0.0",
  "main": "expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@expo/metro-runtime": "~3.2.3",
    "@expo/vector-icons": "^14.0.3",
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/native": "^6.1.18",
    "@react-navigation/stack": "^6.4.1",
    "expo": "~51.0.28",
    "expo-status-bar": "~1.12.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-native": "0.74.5",
    "react-native-paper": "^5.12.5",
    "react-native-safe-area-context": "4.10.5",
    "react-native-screens": "3.31.1",
    "react-native-web": "~0.19.10"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0"
  },
  "private": true
}
```

## 9. Reference

- [React Native Button](https://reactnative.dev/docs/0.74/button)
- [Using BottomNavigation with React Navigation](https://callstack.github.io/react-native-paper/docs/guides/bottom-navigation/)
- [Material Bottom Tabs Navigator](https://reactnavigation.org/docs/material-bottom-tab-navigator)

## 10. JavaScript Snippets

```json
{
	"RN Component": {
		"prefix": "jh-rnc",
		"body": [
			"import React from 'react'",
			"import { View, Text, Button, StyleSheet } from 'react-native'",
			"",
			"export default function ${1:${TM_FILENAME_BASE}}(props) {",
			"  return (",
			"    <View>",
			"",
			"    </View>",
			"  )",
			"}",
			"",
			"const styles = StyleSheet.create({",
			"",
			"});"
		],
		"description": "React Native Function Component"
	},
	"RN Screen": {
		"prefix": "jh-rns",
		"body": [
			"import React from 'react'",
			"import { View, Text, Button, StyleSheet } from 'react-native'",
			"",
			"export default function ${1:${TM_FILENAME_BASE}}(props) {",
			"  return (",
			"    <View style={styles.container}>",
			"      <Text  style={styles.text}>${TM_FILENAME_BASE} Screen</Text>",
			"    </View>",
			"  )",
			"}",
			"",
			"const styles = StyleSheet.create({",
			"  container: {\r",
			"    flex: 1,\r",
			"    justifyContent: \"center\",\r",
			"    alignItems: \"center\",\r",
			"  },\r",
			"  text: {\r",
			"    fontSize: 18,\r",
			"    marginBottom: 20,\r",
			"  },\r",
			"});"
		],
		"description": "React Native Function Screen"
	},
	"RN Stack-Navigator": {
		"prefix": "jh-rnkn",
		"body": [
			"import React from 'react'",
			"import { View, Text, Button, StyleSheet } from 'react-native'",
			"import { createStackNavigator } from '@react-navigation/stack';",
			"",
			"const Stack = createStackNavigator();",
			"",
			"export default function ${1:${TM_FILENAME_BASE}}() {",
			"  return (",
			"    <Stack.Navigator initialRouteName='${2:StackScreen1}'>",
			"      <Stack.Screen",
			"        name='${2:StackScreen1}'",
			"        component={${3:StackScreen1}}",
			"      />",
			"      <Stack.Screen",
			"        name='${4:StackScreen1}'",
			"        component={${5:StackScreen1}}",
			"      />",
			"      <Stack.Screen",
			"        name='${6:StackScreen1}'",
			"        component={${7:StackScreen1}}",
			"      />",
			"      <Stack.Screen",
			"        name='${8:StackScreen1}'",
			"        component={${9:StackScreen1}}",
			"      />",
			"    </Stack.Navigator>",
			"  );",
			"}",
			"",
			"const styles = StyleSheet.create({",
			"",
			"});"
		],
		"description": "React Native Function Stack Navigator"
	},
	"RN Tab-Navigator": {
		"prefix": "jh-rntn",
		"body": [
			"import React from 'react'",
			"import { View, Text, Button, StyleSheet } from 'react-native'",
			"import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';",
			"import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';".
			"import { MaterialIcons } from '@expo/vector-icons';",
			"import { MaterialCommunityIcons } from '@expo/vector-icons';",
			"",
			"const Tab = createBottomTabNavigator();",
			"//const Tab = createMaterialBottomTabNavigator();",
			"",
			"export default function ${1:${TM_FILENAME_BASE}}() {",
			"  return (",
			"    <Tab.Navigator>",
			"      <Tab.Screen",
			"        name='${2:TabScreen1}'",
			"        component={${3:TabScreen1}}",
			"        options={{",
			"          tabBarLabel: '${2:TabScreen1}',",
			"          tabBarIcon: ({ color, size }) => (",
			"            <MaterialIcons name='${2:TabScreen1}' color={color} size={size} />",
			"          ),",
			"        }}",
			"      />",
			"      <Tab.Screen",
			"        name='${4:TabScreen2}'",
			"        component={${5:TabScreen2}}",
			"        options={{",
			"          tabBarLabel: '${4:TabScreen2}',",
			"          tabBarIcon: ({ color, size }) => (",
			"            <MaterialIcons name='${4:TabScreen2}' color={color} size={size} />",
			"          ),",
			"        }}",
			"      />",
			"      <Tab.Screen",
			"        name='${6:TabScreen3}'",
			"        component={${7:TabScreen3}}",
			"        options={{",
			"          tabBarLabel: '${6:TabScreen3}',",
			"          tabBarIcon: ({ color, size }) => (",
			"            <MaterialIcons name='${6:TabScreen3}' color={color} size={size} />",
			"          ),",
			"        }}",
			"      />",
			"      </Tab.Navigator>",
			"  );",
			"}",
			"",
			"const styles = StyleSheet.create({",
			"",
			"});"
		],
		"description": "React Native Function Tab Navigator"
	},
	"RN App w Navigation": {
		"prefix": "jh-rnan",
		"body": [
			"import React from 'react'",
			"import { View, Text, Button, StyleSheet } from 'react-native'",
			"import { NavigationContainer } from '@react-navigation/native';",
			"import { StatusBar } from 'expo-status-bar';",
			"import { SafeAreaProvider } from 'react-native-safe-area-context';",
			"",
			"export default function App() {",
			"  return (",
			"    <SafeAreaProvider>",
			"      <NavigationContainer>",
			"",
			"      </NavigationContainer>",
			"      <StatusBar style=\"auto\" />",
			"    </SafeAreaProvider>",
			"  );",
			"}",
			"",
			"const styles = StyleSheet.create({",
			"",
			"});"
		],
		"description": "React Native App with Navigation"
	},
	"RN Button Navigate": {
		"prefix": "jh-rnb",
		"body": [
			"<Button",
			"  title='${1:Button}'",
			"  onPress={() => {",
			"    props.navigation.navigate(${2:Screen})",
			"  }}",
			"/>"
		],
		"description": "React Native Button"
	}
}
```
