import React from 'react';
import PropTypes from 'prop-types';

class PageButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { index } = this.props;
    return (
      <button type="button">{index}</button>
    );
  }
}

PageButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default PageButton;
