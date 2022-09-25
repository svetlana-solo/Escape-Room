import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatchType, StateType } from '../types/state';

export const useAppDispatch: () => AppDispatchType = useDispatch;

export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;
