import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// a higher-order component that takes a component and returns a new component
export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

   render() {
      return <ComposedComponent { ...this.props } />
    }
  }

 function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
  }

// withRouter allows us to target this.props.history
 return withRouter(connect(mapStateToProps)(Authentication));
}
