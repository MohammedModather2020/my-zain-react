import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AuthReducer from './reducers/auth/AuthReducer';
import ApiReducer from './reducers/api/ApiReducer';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = combineReducers({
  auth: persistReducer(persistConfig, AuthReducer),
  api: ApiReducer,
});

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export { store, persistor };
