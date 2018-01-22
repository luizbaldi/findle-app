import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import verticalCenter from '../components/VerticalCenter.jsx';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <span style={style.title}>Findle</span>
        <RaisedButton
          label="Login com Facebook"
          backgroundColor="#475993"
          labelColor="#fafafa"
          style={style.button}
          fullWidth
        />
        <TextField
          floatingLabelText="Username"
          fullWidth
        />
        <TextField
          floatingLabelText="Senha"
          type="password"
          fullWidth
        />
        <RaisedButton
          label="Acessar"
          backgroundColor="#70e57d"
          labelColor="#fafafa"
          style={style.button}
          fullWidth
        />
        <FlatButton
          label="Esqueci minha senha"
          style={style.button}
          fullWidth
        />
      </div>
    )
  }
}

const style = {
  title: {
    fontSize: '3em',
    display: 'block',
    marginTop: '30px',
    fontWeight: 600,
    color: '#f89f42'
  },
  button: {
    marginTop: '12px'
  }
}

export default verticalCenter(Login);
