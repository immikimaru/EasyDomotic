import React, { Component } from "react";
import {Alert} from "react-native";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.navigation.navigate("Login");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.navigation.navigate("Login");
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
