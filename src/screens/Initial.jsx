import React from 'react';
import cityImg from '../img/city_bg.jpg';
import verticalCenter from '../components/VerticalCenter.jsx';
import styled from 'styled-components';
import Button from '../components/Button.jsx';

const InitialScreen = ({ history }) => (
  <Container>
    <VerticalAlign>
      <Title>Findle</Title>
      <Subtitle>Encontre em segundos o parceiro ideal para sua estratégia digital!</Subtitle>
      <ButtonsContainer>
        <Button
          label="CADASTRAR"
          backgroundColor="#4EF27F"
          labelColor="#2a4755"
          onClick={() => history.push('signUp')}
          bigbutton
        />
        <Button
          label="LOGIN"
          backgroundColor="#2A4755"
          labelColor="#fafafa"
          onClick={() => history.push('login')}
        />
      </ButtonsContainer>
    </VerticalAlign>
  </Container>
);

const Container = styled.div`
  text-align: center;
  background-image: url(${ cityImg });
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  display: table;
  height: 100vh;
  width: 100%;
  overflow-x: auto;
`;

const VerticalAlign = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const Title = styled.span`
  font-size: 3em;
  display: block;
  margin-top: 30px;
  color: #FAFAFA;
  font-weight: 600;
`;

const Subtitle = styled.span`
  margin-top: 40px;
  display: block;
  color: #FAFAFA;
`;

const ButtonsContainer = styled.div`
  padding: 0 20px;
  width: 60%;
  margin: 35px auto 0 auto;
`;

export default InitialScreen;
