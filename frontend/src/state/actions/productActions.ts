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
export interface ProductDeleteSuccessAction {
  type: ActionType.PRODUCT_DELETE_SUCCESS;
}
export interface ProductDeleteFailAction {
  type: ActionType.PRODUCT_DELETE_FAIL;
  payload: string;
}

export interface ProductCreateRequestAction {
  type: ActionType.PRODUCT_CREATE_REQUEST;
}
export interface ProductCreateSuccessAction {
  type: ActionType.PRODUCT_CREATE_SUCCESS;
  payload: Products;
}
export interface ProductCreateFailAction {
  type: ActionType.PRODUCT_CREATE_FAIL;
  payload: string;
}
export interface ProductCreateResetAction {
  type: ActionType.PRODUCT_CREATE_RESET;
}

export interface ProductUpdateRequestAction {
  type: ActionType.PRODUCT_UPDATE_REQUEST;
}
export interface ProductUpdateSuccessAction {
  type: ActionType.PRODUCT_UPDATE_SUCCESS;
  payload: Products;
}
export interface ProductUpdateFailAction {
  type: ActionType.PRODUCT_UPDATE_FAIL;
  payload: string;
}
export interface ProductUpdateResetAction {
  type: ActionType.PRODUCT_UPDATE_RESET;
}

export interface ProductTopRequestAction {
  type: ActionType.PRODUCT_TOP_REQUEST;
}
export interface ProductTopSuccessAction {
  type: ActionType.PRODUCT_TOP_SUCCESS;
  payload: Products[];
}
export interface ProductTopFailAction {
  type: ActionType.PRODUCT_TOP_FAIL;
  payload: string;
}
