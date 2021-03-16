import { ActionType } from '../action-types';
import {
  ProductListRequestAction,
  ProductFailAction,
  ProductSuccessAction,
} from './productActions';

export type ProductAction =
  | ProductListRequestAction
  | ProductFailAction
  | ProductSuccessAction;
