import { userReducer } from './user-reducer';
import {combineReducers, createStore} from 'redux';

const allReducers = combineReducers({
    user: userReducer,
});
// Store
export const store = () => createStore(
    allReducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
