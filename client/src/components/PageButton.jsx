import React from 'react';
import PropTypes from 'prop-types';

const PageButton = (props) => {
  const { changePage } = props;
  const { index } = props;
  return (
    <button onClick={() => changePage(index)} type="button">{index + 1}</button>
  );
};

PageButton.propTypes = {
  index: PropTypes.number.isRequired,
  changePage: PropTypes.func,
};

export default PageButton;
