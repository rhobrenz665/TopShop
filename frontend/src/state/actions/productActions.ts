import { ActionType } from '../action-types';
import { Products } from '../index';

export interface ProductListRequestAction {
  type: ActionType.PRODUCT_LIST_REQUEST;
}

export interface ProductSuccessAction {
  type: ActionType.PRODUCT_LIST_SUCCESS;
  payload: {
    products: Products[];
    pages: number;
    page: number;
  };
}

export interface ProductFailAction {
  type: ActionType.PRODUCT_LIST_FAIL;
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

export interface ProductDeleteRequestAction {
  type: ActionType.PRODUCT_DELETE_REQUEST;
}
export interface ProductDeletSuccessAction {
  type: ActionType.PRODUCT_DELETE_SUCCESS;
}
export interface ProductDeleteFailAction {
  type: ActionType.PRODUCT_DELETE_FAIL;
  payload: string;
}
