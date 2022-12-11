import styled from 'styled-components';

export const Form = styled.form`
padding: 10px;
  max-width: 480px;
`
export const Input = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
transition: background-color 0.5s ease-in-out;
:focus {
    background-color: #e4ffe6;
`
export const Button = styled.button`
width: 100%;
background-color: darkviolet;
color: black;
font-size: 16px;
padding: 8px 0px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;
transition: background-color ease-in-out 300ms;
:hover,
:focus {
  background-color: violet;
`