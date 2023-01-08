import { combineReducers, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import photos from './photos/reducers';

import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  //...
  storage: AsyncStorage,
}