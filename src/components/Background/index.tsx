import React, { ReactNode } from 'react';
import { theme } from '../../global/styles/theme'
import { Container } from './styles'

interface Props {
  children: ReactNode
}


export function Background({children}:Props) {
  const { secondary60, secondary100} = theme.colors
  return (
    <Container
      colors={[secondary60, secondary100]}
   >
     {children}
   </Container>
  )

}