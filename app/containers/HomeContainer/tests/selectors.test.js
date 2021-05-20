import { selectHomeContainer, selectFurnitureList, selectError } from '../selectors';

describe('HomeContainer selector tests', () => {
  let mockedState;
  let furnitureList;
  let error;

  beforeEach(() => {
    furnitureList = { items: [] };
    error = 'There was some error while fetching the repository details';

    mockedState = {
      homeContainer: {
        furnitureList,
        error
      }
    };
  });
  it('should select the homeContainer state', () => {
    const homeContainerSelector = selectHomeContainer();
    expect(homeContainerSelector(mockedState)).toEqual(mockedState.homeContainer);
  });

  it('should select furnitureList', () => {
    const furnitureListSelector = selectFurnitureList();
    expect(furnitureListSelector(mockedState)).toEqual(furnitureList);
  });

  it('should select the error', () => {
    const errorSelector = selectError();
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
