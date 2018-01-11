import React, { Component } from 'react';

const fullscreen = (WrappedComponent, config) => {
  return class extends Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      const defaultConfig = {
        verticalCenter: false
      };
      config = Object.assign(defaultConfig, config);
    }
    render() {
      return (
        <div style={style.container}>
          <div style={config.verticalCenter ? style.form : null}>
            <div style={style.content}>
              <WrappedComponent {...this.props} />
            </div>
          </div>
        </div>
      );
    }
  }
};

const style = {
  container: {
    top: 0,
    left: 0,
    textAlign: 'center',
    height: '100vh',
    width: '100%',
    display: 'table',
    position: 'absolute'
  },
  form: {
    minWidth: '350px',
    padding: '12px',
    verticalAlign: 'middle',
    display: 'table-cell'
  },
  content: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '70%'
  }
};

export default fullscreen;
