import thunk from 'redux-thunk';
import { createStore, combineReducers ,applyMiddleware, compose  } from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import authReducer from '../reducers/auth';

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer
    }),

   composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};



