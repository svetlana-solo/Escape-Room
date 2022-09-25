import { LoadingStatus, NameSpace } from '../../const';
import { StateType } from 'types/state';

export const getPostSendingStatus = (state: StateType): LoadingStatus =>
  state[NameSpace.Order].orderPostSendingStatus;
