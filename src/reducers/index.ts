import { userReducer } from './user-reducer';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { firebaseReducer, reactReduxFirebase} from 'react-redux-firebase';
import { reduxFirestore, getFirestore} from "redux-firestore";
import { getFirebase} from "react-redux-firebase";
import firebaseConfig from '../config/fbConfig';
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    user: userReducer
});
// Store
export const store = () => createStore(
    allReducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebaseConfig),
        reactReduxFirebase(firebaseConfig)
    )
);
