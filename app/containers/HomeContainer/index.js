import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import orderBy from 'lodash/orderBy';
import toLower from 'lodash/toLower';
import get from 'lodash/get';
import { Layout, Card, Rate, Input, Select } from 'antd';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { useInjectSaga } from 'utils/injectSaga';
import { selectHomeContainer, selectFurnitureList, selectError } from './selectors';
import { homeContainerCreators } from './reducer';
import saga from './saga';
import { colors } from '@themes';

const { Content } = Layout;
const { Option } = Select;
const { Search } = Input;

const Container = styled(Content)`
  && {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    align-items: center;
    padding: 2rem;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  &&.ant-card-bordered {
    border: 1px solid #ffffff;
  }
`;

const Text = styled.p`
  font-family: 'Mr Eaves XL Modern', sans-serif;
`;

const Name = styled(Text)`
  font-size: 16px;
`;

const Cost = styled(Text)``;

const Title = styled(Text)`
  color: #999999;
  font-size: 13px;
`;

const Info = styled.div`
  padding: 20px;
`;

const StyledInput = styled(Search)`
  height: 2rem;
  max-width: 15rem;
  border-radius: 8px;
  margin-left: 1rem;
  border: 0px solid ${colors.primary};
  .ant-input-group-addon button {
    justify-content: center;
    display: flex;
    align-items: center;
  }
`;

const TopRightContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 2rem;
  padding-right: 2rem;
  padding-left: 2rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export function HomeContainer({ intl, dispatchGetFurnitureList, furnitureList }) {
  useInjectSaga({ key: 'homeContainer', saga });

  useEffect(() => {
    dispatchGetFurnitureList();
  }, []);

  useEffect(() => {
    setSortedList(furnitureList);
  }, [furnitureList]);

  const [sortByValue, setSortByValue] = useState('Sort By');
  const [sortedList, setSortedList] = useState([]);
  const [searchText, setSearchText] = useState('');

  function handleChange(value) {
    setSortByValue(value);

    switch (value) {
      case 'rating-low':
        setSortedList(orderBy(sortedList, 'rating', 'asc'));
        break;
      case 'rating-high':
        setSortedList(orderBy(sortedList, 'rating', 'desc'));
        break;
      case 'price-low':
        setSortedList(orderBy(sortedList, 'cost', 'asc'));
        break;
      case 'price-high':
        setSortedList(orderBy(sortedList, 'cost', 'desc'));
        break;
      default:
        break;
    }
  }
  function onSearch(e) {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    if (searchText) {
      const filteredList = furnitureList.filter(furniture =>
        toLower(get(furniture, 'name', '')).includes(toLower(searchText))
      );
      setSortedList(filteredList);
    } else {
      setSortedList(furnitureList);
    }
  }, [searchText]);

  return (
    <StyledDiv>
      <TopRightContent>
        <Select defaultValue={sortByValue} style={{ width: 150 }} onChange={handleChange}>
          <Option value="rating-low">Rating Low to High</Option>
          <Option value="rating-high">Rating High to Low</Option>
          <Option value="price-low">Price Low to High</Option>
          <Option value="price-high">Price High to Low</Option>
        </Select>
        <StyledInput placeholder="Search by name..." onChange={onSearch}></StyledInput>
      </TopRightContent>
      <Container>
        {sortedList.map(furnitureInfo => (
          <StyledCard key={furnitureInfo.id} hoverable style={{ maxWidth: 300 }}>
            <img src={furnitureInfo.image} />
            <Info>
              <Name>{furnitureInfo.name}</Name>
              <Title>{furnitureInfo.title}</Title>
              <Cost>{furnitureInfo.cost}</Cost>
              <Rate disabled defaultValue={furnitureInfo.rating} />
            </Info>
          </StyledCard>
        ))}
      </Container>
    </StyledDiv>
  );
}

HomeContainer.propTypes = {
  intl: PropTypes.object,
  dispatchGetFurnitureList: PropTypes.func,
  furnitureList: PropTypes.array,
  error: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  homeContainer: selectHomeContainer(),
  furnitureList: selectFurnitureList(),
  error: selectError()
});

function mapDispatchToProps(dispatch) {
  const { requestGetFurnitureList } = homeContainerCreators;
  return {
    dispatchGetFurnitureList: () => dispatch(requestGetFurnitureList())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(injectIntl, withConnect, memo)(HomeContainer);

export const HomeContainerTest = compose(injectIntl)(HomeContainer);
