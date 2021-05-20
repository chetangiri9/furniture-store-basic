import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

/**
 * Direct selector to the homeContainer state domain
 */

const selectHomeContainerDomain = state => state.homeContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomeContainer
 */

export const selectHomeContainer = () => createSelector(selectHomeContainerDomain, substate => substate);

export const selectFurnitureList = () =>
  createSelector(selectHomeContainerDomain, substate => get(substate, 'furnitureList', null));

export const selectError = () => createSelector(selectHomeContainerDomain, substate => get(substate, 'error', null));

export default selectHomeContainer;
