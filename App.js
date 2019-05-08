import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppNavigator from './navigator/AppNavigator';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/u0wzxrxx3k4x`,
  credentials: 'some-origin',
  headers: {
    Authorization: `Bearer a6z1MOhJStBwgSJqyJ7RKAO9leVu5s-LwWkC-9IrEAs`
  }
})

const initialState = {
  action: '',
  name: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CLOSE_MENU':
      return {
        action: 'closeMenu'
      }
    case 'OPEN_MENU': {
      return {
        action: 'openMenu'
      }
    }
    case 'UPDATE_NAME': 
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;