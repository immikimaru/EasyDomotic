/**
 * Easy Domotic App
 * https://github.com/immikimaru/EasyDomotic
 *
 * @format
 * @flow
 */

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import TouchID from 'react-native-touch-id'

import RegisterScreen from './components/Register/RegisterScreen'
import LoginScreen from './components/Login/LoginScreen'

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "Login"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
