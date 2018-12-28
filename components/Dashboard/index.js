import React, { Component } from "react";
import { View, Text } from "react-native";
import DashboardScreen from "./DashboardScreen";
import Sidebar from "../Sidebar/index.js";
import { createDrawerNavigator } from 'react-navigation';

const DashboardRouter = createDrawerNavigator({
    HomeDash:{
        screen: DashboardScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Dashboard',
        })
    }
  },{
    initialRouteName: 'HomeDash',
    contentComponent: Sidebar,
    drawerWidth: 300
});

export default DashboardRouter;
