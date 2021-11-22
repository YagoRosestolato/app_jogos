import React from 'react';
import { theme } from '../../global/styles/theme'
import { Container, AvatarImage } from './styles'

interface AvatarProps {
  urlImage: string
}

export function Avatar({urlImage}: AvatarProps){
  const { secondary50, secondary70 } = theme.colors
  return(
    <Container 
      colors={[secondary50, secondary70]}
      >

      <AvatarImage 
      source={{uri: urlImage}}/>
    </Container>
  )
}
