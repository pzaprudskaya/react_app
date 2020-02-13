import { IUser } from '../interfaces';
import {TUpdateUserType} from "./actions/user-actions";

const initialUserStateData: IUser = {
  name: '',
  surname: '',
  email: '',
  password: ''
};

export const userReducer = (state = initialUserStateData, action: { type: TUpdateUserType, payload: IUser }) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return action.payload;
    default:
      return state;
  }
};
