import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import cityImg from '../img/city_bg.jpg';

const InitialScreen = () => (
  <div style={style.container}>
    <div style={style.verticalAlign}>
      <span style={style.title}>Findle</span>
      <span style={style.subtitle}>Encontre e contribua com locais próximos a você :)</span>
      <div style={style.buttons}>
        <RaisedButton
          label="LOGIN"
          backgroundColor="#EEE"
          labelColor="#f4a556"
          style={style.button}
          fullWidth
        />
        <RaisedButton
          label="CRIAR CONTA"
          backgroundColor="#EEE"
          labelColor="#f4a556"
          style={style.button}
          fullWidth
        />
      </div>
    </div>
  </div>
);

const style = {
  container: {
    textAlign: 'center',
    padding: '16px',
    backgroundImage: `url(${cityImg})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    overflowY: 'auto',
    display: 'table',
    height: '100%'
  },
  title: {
    fontSize: '3em',
    display: 'block',
    marginTop: '30px',
    color: '#FAFAFA',
    fontWeight: 600
  },
  verticalAlign: {
    display: 'table-cell',
    verticalAlign: 'middle'
  },
  subtitle: {
    marginTop: '40px',
    display: 'block',
    color: '#FAFAFA'
  },
  buttons: {
    marginTop: '35px'
  },
  button: {
    marginTop: '12px'
  }
};

export default InitialScreen;
