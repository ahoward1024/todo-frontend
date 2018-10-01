import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import AppRedux from './AppRedux';
import ReducerRedux from './ReducerRedux';

const initialState = {
  'checkall': false,
  'todos': []
};

export const store = createStore(ReducerRedux, initialState, applyMiddleware(thunk));

function indexRedux() {
  return (
    <Provider store={store}>
     <AppRedux />
    </Provider>
  );
}

export default indexRedux;
