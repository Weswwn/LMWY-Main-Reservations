import React from 'react';
import PageButton from './PageButton.jsx';

const ButtonList = (props) => {
  const { numberOfPages } = props;
  const { changePage } = props;
  const listOfButtons = [];
  for (let i = 0; i < numberOfPages; i++) {
    listOfButtons.push(<span><PageButton changePage={changePage} index={i} /></span>);
  }
  return listOfButtons;
};
export default ButtonList;
