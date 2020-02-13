import {IUser} from '../../interfaces';
export type TUpdateUserType = 'UPDATE_USER';

export const updateUser = (user: IUser): {type: TUpdateUserType, payload: IUser} => {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
};
