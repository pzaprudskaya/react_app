import { userReducer} from './user-reducer';
import { combineReducers, createStore } from 'redux';

const allReducers = combineReducers({
    user: userReducer,
});

// Store
export const store = () => createStore(
    allReducers,
    {}
);
