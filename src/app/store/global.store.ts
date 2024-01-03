import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { AuthState, authReducer } from './auth';
import { NotificationState, notificationEpic, notificationReducer } from './notification';

const rootReducer = combineReducers<GlobalState>({
  auth: authReducer,
  notification: notificationReducer,
});

const rootEpic = combineEpics(notificationEpic);

const epicMiddleware = createEpicMiddleware();
const store = legacy_createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export interface GlobalState {
  auth: AuthState;
  notification: NotificationState;
}

export default store;
