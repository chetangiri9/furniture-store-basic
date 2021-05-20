import { homeContainerTypes, homeContainerCreators } from '../reducer';

describe('HomeContainer action tests', () => {
  it('has a type of REQUEST_GET_FURNITURE_LIST', () => {
    const expected = {
      type: homeContainerTypes.REQUEST_GET_FURNITURE_LIST
    };
    expect(homeContainerCreators.requestGetFurnitureList()).toEqual(expected);
  });
});
