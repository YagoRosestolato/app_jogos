import styled from "styled-components/native";

export const Container =  styled.View `
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background} 
`

export const Header = styled.View `
  width: 100%;
  padding-left: 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 42px;

`

export const Profile = styled.View `

`
