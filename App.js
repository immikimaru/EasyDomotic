/**
 * Easy Domotic App
 * https://github.com/immikimaru/EasyDomotic
 *
 * @format
 * @flow
 */

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import requireAuth from './hoc/require_auth';
import noRequireAuth from './hoc/no_require_auth';

import RegisterScreen from './components/Register/RegisterScreen'
import LoginScreen from './components/Login/LoginScreen'
import DashboardScreen from './components/Dashboard/DashboardScreen'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store'

const { persistor, store } = configureStore();

const AppNavigator = createStackNavigator(
  {
    Login: noRequireAuth(LoginScreen),
    Register: noRequireAuth(RegisterScreen),
    Dashboard: requireAuth(DashboardScreen)
  },
  { initialRouteName: "Dashboard" }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
		    <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
	     </Provider>
    );
  }
}
