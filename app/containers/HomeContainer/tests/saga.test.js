/**
 * Test homeContainer sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest, call, put } from 'redux-saga/effects';
import { getFurnitureList } from '@services/repoApi';
import { apiResponseGenerator } from '@utils/testUtils';
import homeContainerSaga, { getFurnituresList } from '../saga';
import { homeContainerTypes } from '../reducer';

describe('HomeContainer saga tests', () => {
  const generator = homeContainerSaga();

  let getFurnituresListGenerator = getFurnituresList();

  it('should start task to watch for REQUEST_GET_FURNITURE_LIST action', () => {
    expect(generator.next().value).toEqual(
      takeLatest(homeContainerTypes.REQUEST_GET_FURNITURE_LIST, getFurnituresList)
    );
  });

  it('should ensure that the action FAILURE_GET_FURNITURE_LIST is dispatched when the api call fails', () => {
    const res = getFurnituresListGenerator.next().value;
    expect(res).toEqual(call(getFurnitureList));
    const errorResponse = {
      errorMessage: 'There was an error while fetching furniture list.'
    };
    expect(getFurnituresListGenerator.next(apiResponseGenerator(false, errorResponse)).value).toEqual(
      put({
        type: homeContainerTypes.FAILURE_GET_FURNITURE_LIST,
        error: errorResponse
      })
    );
  });

  it('should ensure that the action SUCCESS_GET_FURNITURE_LIST is dispatched when the api call succeeds', () => {
    getFurnituresListGenerator = getFurnituresList();
    const res = getFurnituresListGenerator.next().value;
    expect(res).toEqual(call(getFurnitureList));
    const data = {
      items: []
    };
    expect(getFurnituresListGenerator.next(apiResponseGenerator(true, data)).value).toEqual(
      put({
        type: homeContainerTypes.SUCCESS_GET_FURNITURE_LIST,
        data: data.items
      })
    );
  });
});
