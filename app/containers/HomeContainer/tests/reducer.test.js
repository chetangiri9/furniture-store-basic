import { homeContainerReducer, initialState, homeContainerTypes } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('HomContainer reducer tests', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(homeContainerReducer(undefined, {})).toEqual(state);
  });

  it('should return the initial state when an action of type REQUEST_GET_FURNITURE_LIST is dispatched', () => {
    const expectedResult = { ...state };
    expect(
      homeContainerReducer(state, {
        type: homeContainerTypes.REQUEST_GET_FURNITURE_LIST
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that the user data is present and userLoading = false when SUCCESS_GET_FURNITURE_LIST is dispatched', () => {
    const data = [];
    const expectedResult = { ...state, furnitureList: data };
    expect(
      homeContainerReducer(state, {
        type: homeContainerTypes.SUCCESS_GET_FURNITURE_LIST,
        data
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that the userErrorMessage has some data and userLoading = false when FAILURE_GET_FURNITURE_LIST is dispatched', () => {
    const error = 'something_went_wrong';
    const expectedResult = { ...state, error: error };
    expect(
      homeContainerReducer(state, {
        type: homeContainerTypes.FAILURE_GET_FURNITURE_LIST,
        error
      })
    ).toEqual(expectedResult);
  });
});
