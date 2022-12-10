import styled from 'styled-components';
export const List = styled.ul`
padding: 20px 20px;
max-width: 480px;
`
export const Item = styled.ul`
padding: 5px;
display: flex;
border-bottom: 1px solid #999;
`
export const Text = styled.span`
margin-right: auto;
line-height: 34px;
`
export const Button = styled.button`
width: 100px;
height: 32px;
color: black;
background-color: darkviolet;
font-size: 16px;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color ease-in-out 300ms;
:hover {
    background-color: violet;
}
`
