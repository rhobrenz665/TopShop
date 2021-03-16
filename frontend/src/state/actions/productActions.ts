import { ActionType } from '../action-types';
import { Products } from '../index';

export interface ProductListRequestAction {
  type: ActionType.PRODUCT_LIST_REQUEST;
}

export interface ProductSuccessAction {
  type: ActionType.PRODUCT_SUCCESS;
  payload: Products[];
}

export interface ProductFailAction {
  type: ActionType.PRODUCT_FAIL;
  payload: string;
}
