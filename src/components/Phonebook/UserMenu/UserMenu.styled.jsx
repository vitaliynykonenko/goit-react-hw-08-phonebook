import styled from 'styled-components';

export const Nav = styled.nav`
display: flex;
align-items: center;
`
export const Menu = styled.menu`
display: flex;
flex-direction: column;
margin-right: 20px;
`
export const Text = styled.p`
font-size: 16px;
margin: 0;
`
export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: black;
background-color: darkviolet;
width: 100px;
height: 32px;
margin-left: 10px;
padding: 5px;
cursor: pointer;
text-decoration: none;
border: none;
border-radius: 4px;
font-size: 16px;
transition: background-color ease-in-out 300ms;
:hover,
:focus {
  background-color: violet;
}
`