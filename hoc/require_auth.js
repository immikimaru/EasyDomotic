import React, { Component } from "react";
import {Alert} from "react-native";
import { connect } from "react-redux";
import { NavigationActions, StackActions } from 'react-navigation';

export default function(ComposedComponent) {

  class Authentication extends Component {
    componentWillMount() {
      console.log('componentWillMount')
      if (!this.props.authenticated) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Login" })],
          key: null
        });
        this.props.navigation.dispatch(resetAction);
      }
    }

    componentWillUpdate(nextProps) {
      console.log('componentWillMount')
      if (!nextProps.authenticated) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Login" })],
          key: null
        });
        this.props.navigation.dispatch(resetAction);
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.user.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
