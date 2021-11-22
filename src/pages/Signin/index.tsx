import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native';

import Illustration from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon';
import {
     Container, 
     Content,
     Title,
     SubTitle 
}  from './styles'

export function Signin() {
  const navigation = useNavigation ();

  function handleSignin(){
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Image source={Illustration} />
      <Content>
        <Title>
          Conecte-se {'\n'}
          e organize{'\n'}
          suas jogatinas{'\n'}
          facilmente
        </Title>
        <SubTitle>
          Crie grupo para jogar seus games{'\n'}
          favoritos com seus amigos
        </SubTitle>
        <ButtonIcon 
          title="Entrar com Discord"
          activeOpacity={0.7}
          disabled={false}
          onPress={handleSignin}
          
        />
      </Content>
    </Container>
  )
}