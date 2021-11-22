import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-top: 10px;
`

export const Content = styled.View`

`

export const User = styled.View`
  flex-direction: row;
`

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title500};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.heading};
  margin-right: 5px;
`

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.heading};
`

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.colors.heading}
`