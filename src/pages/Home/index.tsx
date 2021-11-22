import React from 'react'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Profile } from '../../components/Profile'
import { Container, Header } from './styles'


export function Home(){
  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>

    </Container>
  )
}