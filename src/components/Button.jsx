import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';

const Button = ({ label, backgroundColor, labelColor, onClick, bigbutton }) => (
  <StyledButton
    label={label}
    backgroundColor={backgroundColor}
    labelColor={labelColor}
    onClick={onClick}
    bigbutton={bigbutton.toString()}
    fullWidth
  />
);

Button.defaultProps = {
  backgroundColor: '#f89f42',
  labelColor: '#fafafa',
  bigbutton: false
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  labelColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  bigbutton: PropTypes.bool
};

const StyledButton = styled(RaisedButton) `
  margin-top: 20px;

  ${props => props.bigbutton ? `
    > button {
      height: 50px !important;
    }`
    : ''
  }
`;

export default Button;
