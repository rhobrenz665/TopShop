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

export interface ProductDetailsRequestAction {
  type: ActionType.PRODUCT_DETAILS_REQUEST;
}
export interface ProductDetailsSuccessAction {
  type: ActionType.PRODUCT_DETAILS_SUCCESS;
  payload: any;
}
export interface ProductDetailsFailAction {
  type: ActionType.PRODUCT_DETAILS_FAIL;
  payload: string;
}
