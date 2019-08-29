import React from 'react';
import PropTypes from 'prop-types';

const PageButton = (props) => {
  const { pageNumber } = props;
  return (
    <button type="button">{pageNumber}</button>
  );
};

PageButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
};

export default PageButton;
