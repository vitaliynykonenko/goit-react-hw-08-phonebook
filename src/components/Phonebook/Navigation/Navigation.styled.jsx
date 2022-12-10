import styled from 'styled-components';

export const Nav = styled.nav`
display: flex;
  align-items: center;
`;

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: black;
background-color: darkviolet;
width: 100px;
height: 32px;
cursor: pointer;
text-decoration: none;
border: none;
border-radius: 4px;
box-shadow: 1px 1px 1px darkviolet;
font-size: 16px;
margin-right: 10px;
transition: background-color ease-in-out 300ms;
:hover,
:focus {
  background-color: violet;
}
`;
