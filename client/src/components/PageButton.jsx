import React from 'react';
import PropTypes from 'prop-types';

const PageButton = (props) => {
  const { changePage } = props;
  const { index } = props;
  return (
    <button onClick={(e) => changePage(index, e)} type="button">{index + 1}</button>
  );
};

PageButton.propTypes = {
  index: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default PageButton;
