import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import ReduxApp from './ReduxApp';
import ReduxReducer from './ReduxReducer';

export const initialState = {
  'checkall': false,
  'todos': []
};

export const store = createStore(ReduxReducer, initialState, applyMiddleware(thunk));

function ReduxIndex() {
  return (
    <Provider store={store}>
     <ReduxApp />
    </Provider>
  );
}

export default ReduxIndex;
