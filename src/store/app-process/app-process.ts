import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type AppProcessType = {
  activeQuestGenre: string;
}

const initialState: AppProcessType = {
  activeQuestGenre: 'all-quests'
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.activeQuestGenre = action.payload;
    }
  }
});

export const { changeGenre } = appProcess.actions;
