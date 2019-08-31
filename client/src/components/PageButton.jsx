import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.div`
    border-radius: 50%;
    border: 1px solid #d8d9db;
    /* padding: 5px 10px 20px 23px; */
    margin: 0 10px 0 10px;
    padding:15px 20px;
    display: flex;
    vertical-align: middle;
    align-content: center;
    align-items: center;
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
    <Button onClick={(e) => changePage(index, e)} type="button">{index + 1}</Button>
  );
};

PageButton.propTypes = {
  index: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default PageButton;
