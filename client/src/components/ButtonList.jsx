import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageButton from './PageButton.jsx';

const Body = styled.span`
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
  height: 30%;
  max-width: 50;
  width: 100%;
  margin: 0 70px 0 500px;
  padding: 1rem 0 1rem 0;
  height: 60px;
`;
Body.displayName = 'Body';

const ButtonList = (props) => {
  const { numberOfPages } = props;
  const { changePage } = props;
  const { currentIndex } = props;
  const listOfButtons = [];
  for (let i = 0; i < numberOfPages; i++) {
    listOfButtons.push(<PageButton key={`${i}numberOfPages`} currentIndex={currentIndex} changePage={changePage} index={i} />);
  }
  return (
    <Body>{ listOfButtons }</Body>
  );
};

ButtonList.propTypes = {
  numberOfPages: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,

};
export default ButtonList;
