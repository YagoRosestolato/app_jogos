import React from 'react';
import { Avatar } from '../Avatar/';
import { 
   Container,
   User, 
   Content, 
   Greeting, 
   UserName, 
   Message } from './styles';

export function Profile() {
  return (
    <Container>
      <Avatar urlImage='https://avatars.githubusercontent.com/u/65322715?s=40&v=4' />
      <Content>
        <User>
          <Greeting>
            Olá, 
          </Greeting>
          <UserName>
            Yago
          </UserName>
        </User>
        <Message>
          Hoje é dia de vitória
        </Message>
      </Content>
    </Container>
  )
}