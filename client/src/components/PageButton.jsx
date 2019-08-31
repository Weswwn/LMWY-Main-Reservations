import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.div`
    border-radius: 50%;
    border: 1px solid #d8d9db;
    padding: 20px 23px 20px 23px;
    margin: 0 10px 0 10px;
    display: inline-flex;
    box-sizing: border-box;
    :hover {
    cursor: pointer;
    border: 2px solid #da3743;
    margin: 0 9px 0 9px;
  }
  :focus {
    outline:0;
  }
`;
Button.displayName = 'Button';

const PageButton = (props) => {
  const { changePage } = props;
  const { index } = props;
  return (
    <Button onClick={(e) => changePage(index, e)} type="button"><span>{index + 1}</span></Button>
  );
};

PageButton.propTypes = {
  index: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default PageButton;
