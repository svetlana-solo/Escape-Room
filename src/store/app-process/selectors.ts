import { NameSpace } from '../../const';
import { StateType } from 'types/state';

export const getActiveGenre = (state: StateType): string =>
  state[NameSpace.App].activeQuestGenre;
