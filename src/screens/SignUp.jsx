import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import verticalCenter from '../components/VerticalCenter.jsx';
import styled from 'styled-components';

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title>Findle</Title>
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
          floatingLabelText="Nome"
          fullWidth
        />
        <TextField
          floatingLabelText="E-mail"
          fullWidth
        />
        <TextField
          floatingLabelText="Senha"
          type="password"
          fullWidth
        />
        <RaisedButton
          label="Cadastrar"
          backgroundColor="#70e57d"
          labelColor="#fafafa"
          style={style.button}
          fullWidth
        />
      </div>
    )
  }
}

const Title = styled.span`
  font-size: 3em;
  display: block;
  margin-top: 30px;
  font-weight: 600;
  color: #f89f42;
`;

const style = {
  button: {
    marginTop: '12px'
  }
}

export default verticalCenter(SignUp);
