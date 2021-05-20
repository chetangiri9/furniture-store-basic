/*
 *
 * HomeContainer reducer
 *
 */
import produce from 'immer';
import { createActions } from 'reduxsauce';
import get from 'lodash/get';

export const { Types: homeContainerTypes, Creators: homeContainerCreators } = createActions({
  requestGetFurnitureList: [],
  successGetFurnitureList: ['data'],
  failureGetFurnitureList: ['error']
});
export const initialState = { furnitureList: [], error: null };

/* eslint-disable default-case, no-param-reassign */
export const homeContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case homeContainerTypes.SUCCESS_GET_FURNITURE_LIST:
        draft.furnitureList = action.data;
        break;
      case homeContainerTypes.FAILURE_GET_FURNITURE_LIST:
        draft.error = get(action.error, 'message', 'something_went_wrong');
        break;
    }
  });

export default homeContainerReducer;
