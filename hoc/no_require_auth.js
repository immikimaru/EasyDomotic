import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.navigation.navigate("Dashboard");
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.navigation.navigate("Dashboard");
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
