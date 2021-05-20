/**
 *
 * Header
 *
 */

import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { colors } from '@themes';

const StyledHeader = styled(Layout.Header)`
  && {
    &.ant-layout-header {
      padding: 0 3rem;
      height: 7rem;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${colors.primary};
  }
`;
const Title = styled.p`
  font-size: x-large;
  color: white;
`;

function Header(props) {
  return (
    <StyledHeader {...props} data-testid="header">
      <Title data-testid="title">We Sell Recliners</Title>
    </StyledHeader>
  );
}

export default injectIntl(Header);
