import { generateApiClient } from '@utils/apiUtils';
const furnitureApi = generateApiClient('mocky');

export const getFurnitureList = () => furnitureApi.get(`/v3/68ab9cd1-33f7-4268-9bad-553864ae7047`);
