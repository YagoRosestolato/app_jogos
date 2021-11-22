import styled from 'styled-components/native';

export const Container = styled.View `
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background} 
`
export const Content = styled.View`
margin-top: -40px;
padding: 50px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;

`