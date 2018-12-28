/**
 * Easy Domotic App
 * https://github.com/immikimaru/EasyDomotic
 *
 * @format
 * @flow
 */

import React from 'react'
import { createStackNavigator,createDrawerNavigator,createAppContainer, DrawerActions } from 'react-navigation'

import { Button, Dimensions, Image } from 'react-native'
import requireAuth from './hoc/require_auth';
import noRequireAuth from './hoc/no_require_auth';

import RegisterScreen from './components/Register/RegisterScreen'
import LoginScreen from './components/Login/LoginScreen'
import DashboardRouter from './components/Dashboard/'
import DashboardScreen from './components/Dashboard/DashboardScreen'
import Sidebar from './components/Sidebar/index.js'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store'

import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');

const { persistor, store } = configureStore();

var imgLogo = require('./assets/logo.png')

const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={Icon} iconSize={30} color="#000" />
);

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: noRequireAuth(LoginScreen),
      path: 'login/',
      navigationOptions: ({ navigation }) => ({
        header: null,
      })
    },
    Register: noRequireAuth(RegisterScreen),
    Dashboard: {
      screen: requireAuth(DashboardScreen),
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#eee',
        },
        headerTitle: (<Image source={imgLogo} style={{width: 130, resizeMode: 'contain'}}/>),
        headerLeft: (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item title="search" iconName="ios-menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          </HeaderButtons>
        ),
        headerRight: (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item title="search" iconName="ios-notifications" onPress={() => console.log('onClick')} />
          </HeaderButtons>
        ),
      })
    }
  },
  { initialRouteName: "Login",
    mode: 'card'   }
)

const AppDrawer = createDrawerNavigator(
  {
    Drawer: {
      screen: AppNavigator,
      navigationOptions:({navigation})=>({
         drawerLockMode:"locked-closed"
      })
    },
  },
  {
    initialRouteName: 'Drawer',
    contentComponent: Sidebar,
    drawerWidth: width * 0.8
  }
);

const AppContainer = createAppContainer(AppDrawer);

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
