import React, { Component } from 'react';
import { Provider,connect,createStore  } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';

import store from './src/publics/redux/store';
import RootNavigator from './src/publics/navigators/RootNavigator';

const App = reduxifyNavigator(RootNavigator,"root");
const mapStateToProps = (state) => ({
  state: state.router,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

class Root extends Component {
  render(){
  return(
    <Provider store={store}>
      <AppWithNavigationState/>
    </Provider>
    );
  }
}

export default Root;
