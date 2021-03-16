import { combineReducers } from 'redux';
import productreducer from './productReducers';

const reducers = combineReducers({
  productList: productreducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
