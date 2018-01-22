import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const verticalCenter = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <VerticalContainer>
          <VerticalContent>
            <Content>
              <WrappedComponent {...this.props} />
            </Content>
          </VerticalContent>
        </VerticalContainer>
      );
    }
  }
};

verticalCenter.PropTypes = {
  WrappedComponent: PropTypes.element.isRequired
};

const VerticalContainer = styled.div`
  top: 0;
  left: 0;
  text-align: center;
  height: 100vh;
  width: 100%;
  display: table;
  position: absolute;
`;

const VerticalContent = styled.div`
  min-width: 350px;
  padding: 12px;
  vertical-align: middle;
  display: table-cell;
`;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;

export default verticalCenter;
