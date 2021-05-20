/**
 *
 * Tests for HomeContainer
 *
 */

import React from 'react';
import { renderProvider } from '@utils/testUtils';
import { HomeContainerTest as HomeContainer } from '../index';

describe('<HomeContainer /> tests', () => {
  let submitSpy;

  beforeEach(() => {
    submitSpy = jest.fn();
  });
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(<HomeContainer dispatchGetFurnitureList={submitSpy} />);
    expect(baseElement).toMatchSnapshot();
  });
});
