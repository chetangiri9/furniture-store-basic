import MockAdapter from 'axios-mock-adapter';
import { getApiClient } from '@utils/apiUtils';
import { getFurnitureList } from '../repoApi';

describe('RepoApi tests', () => {
  it('should make the api call to "/search/repositories?q="', async () => {
    const mock = new MockAdapter(getApiClient().axiosInstance);
    const data = [
      {
        items: []
      }
    ];
    mock.onGet(`/v3/68ab9cd1-33f7-4268-9bad-553864ae7047`).reply(200, data);
    const res = await getFurnitureList();
    expect(res.data).toEqual(data);
  });
});
