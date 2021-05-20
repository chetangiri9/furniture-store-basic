import { put, call, takeLatest } from 'redux-saga/effects';
import { getFurnitureList } from '@services/repoApi';
import { homeContainerTypes, homeContainerCreators } from './reducer';

const { REQUEST_GET_FURNITURE_LIST } = homeContainerTypes;
const { successGetFurnitureList, failureGetFurnitureList } = homeContainerCreators;

export function* getFurnituresList(action) {
  const response = yield call(getFurnitureList);
  const { data, ok } = response;

  if (ok) {
    yield put(successGetFurnitureList(data.items));
  } else {
    yield put(failureGetFurnitureList(data));
  }
}

export default function* homeContainerSaga() {
  yield takeLatest(REQUEST_GET_FURNITURE_LIST, getFurnituresList);
}
