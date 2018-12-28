import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationActions, StackActions } from 'react-navigation';

export default function(ComposedComponent) {

  class NotAuthentication extends Component {

    componentWillMount() {
      if (this.props.authenticated) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Dashboard" })],
          key: null
        });
        this.props.navigation.dispatch(resetAction);
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Dashboard" })],
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

  return connect(mapStateToProps)(NotAuthentication);
}
