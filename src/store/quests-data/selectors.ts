import { createSelector } from '@reduxjs/toolkit';
import { LoadingStatus, NameSpace } from '../../const';
import { getActiveGenre } from 'store/app-process/selectors';
import { StateType } from 'types/state';
import { QuestType } from 'types/types';

export const getQuests = (state: StateType): QuestType[] =>
  state[NameSpace.Quest].quests;

export const getQuestsDataLoadedStatus = (state: StateType): LoadingStatus =>
  state[NameSpace.Quest].questsLoadingStatus;

export const selectFilteredQuests = createSelector(
  getQuests,
  getActiveGenre,
  (quests, genre) => {
    if (genre === 'all-quests') {
      return quests;
    }

    return quests.filter((quest) => quest.type === genre);
  });
