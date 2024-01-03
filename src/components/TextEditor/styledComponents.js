import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
`
export const BgCard = styled.div`
  display: flex;
  background-color: #1b1c22;
  padding: 15px;
  min-width: 50vw;
`
export const ImageContainer = styled.div``

export const Image = styled.img`
  height: 60vh;
  width: 40vw;
`
export const TextHeading = styled.h1`
  text-align: center;
  font-family: 'Roboto';
  color: #ffffff;
`
export const RightContainer = styled.div`
  background-color: #25262c;
  width: 40vw;
  border-style: solid;
  border-color: #334155;
  border-radius: 15px;
  padding: 20px;
  margin-left: 20px;
`
export const Button1 = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.activeBoldColor};
`
export const Button2 = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.activeItalianColor};
`
export const Button3 = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.activeUnderlineColor};
`
export const ButtonContainer = styled.ul`
  display: flex;
  padding-left: 0px;
  list-style-type: none;
`
export const ListContainer = styled.li``
export const TextContent = styled.textarea`
  background-color: transparent;

  height: 40vh;
  width: 30vw;
  color: #ffffff;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-size: 20px;
  margin-top: 20px;
  font-style: ${props => props.activeItalian};
  font-weight: ${props => props.activeBold};
  text-decoration: ${props => props.activeUnderline};
`
