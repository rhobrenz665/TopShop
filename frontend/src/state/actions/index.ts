import {
  ProductListRequestAction,
  ProductFailAction,
  ProductSuccessAction,
  ProductDetailsFailAction,
  ProductDetailsRequestAction,
  ProductDetailsSuccessAction,
} from './productActions';

export type ProductAction =
  | ProductListRequestAction
  | ProductFailAction
  | ProductSuccessAction
  | ProductDetailsFailAction
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction;
