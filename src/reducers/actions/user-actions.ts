import {IUser} from '../../interfaces';
import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";
export type TUpdateUserType = 'UPDATE_USER';

export const updateUser = (user: IUser): {type: TUpdateUserType, payload: IUser} => {
/*  return {
    type: 'UPDATE_USER',
    payload: user,
  };*/
  return (dispatch: any, getState: any, { getFirebase, getFirestore }) => {
    dispatch({ type: 'UPDATE_USER', user});
  }
};
