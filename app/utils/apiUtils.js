import { create } from 'apisauce';
import snakeCase from 'lodash/snakeCase';
import camelCase from 'lodash/camelCase';
import { mapKeysDeep } from './index';

const { API_URL } = process.env;
const apiClients = {
  mocky: null,
  default: null
};
export const getApiClient = (type = 'mocky') => apiClients[type];
export const generateApiClient = (type = 'mocky') => {
  switch (type) {
    case 'mocky':
      apiClients[type] = createApiClientWithTransForm(API_URL);
      return apiClients[type];
    default:
      apiClients.default = createApiClientWithTransForm(API_URL);
      return apiClients.default;
  }
};

export const createApiClientWithTransForm = baseURL => {
  const api = create({
    baseURL,
    headers: { 'Content-Type': 'application/json' }
  });
  api.addResponseTransform(response => {
    const { ok, data } = response;
    if (ok && data) {
      response.data = mapKeysDeep(data, keys => camelCase(keys));
    }
    return response;
  });

  api.addRequestTransform(request => {
    const { data } = request;
    if (data) {
      request.data = mapKeysDeep(data, keys => snakeCase(keys));
    }
    return request;
  });
  return api;
};
