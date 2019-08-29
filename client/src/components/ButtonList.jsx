import React from 'react';
import PageButton from './PageButton.jsx';

const ButtonList = (props) => {
  const { numberOfPages } = props;
  const listOfButtons = [];
  for (let i = 1; i < numberOfPages + 1; i++) {
    listOfButtons.push(<span><PageButton index={i} /></span>);
  }
  return listOfButtons;
};
export default ButtonList;
