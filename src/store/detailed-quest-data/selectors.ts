import { LoadingStatus, NameSpace } from '../../const';
import { StateType } from 'types/state';
import { QuestType } from 'types/types';

export const getDetailedQuest = (state: StateType): QuestType =>
  state[NameSpace.DetailedQuest].quest;

export const getDetailedQuestLoadedStatus = (state: StateType): LoadingStatus =>
  state[NameSpace.DetailedQuest].questLoadingStatus;
