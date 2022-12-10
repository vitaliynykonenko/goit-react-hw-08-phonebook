import styled from 'styled-components';

export const Section = styled.section`
display: block;
min-width: 420px;
max-width: 500px;
margin: 0 auto;
margin-top: 20px;
padding: 20px;
background-color: #f2f2f2;
border-radius: 5px;
`

export const H2 = styled.h2`
font-size: 16px;
text-align: center;
margin: 0;
margin-bottom: 20px;
`

export const Label = styled.label`
display: flex;
flex-direction: column;
font-size: 16px;
`

export const Input = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0 20px;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
transition: background-color 0.5s ease-in-out;
:hover,
:focus {
  background-color: #e4ffe6;
`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
color: black;
background-color: darkviolet;
width: 100px;
height: 32px;
margin: 0 auto;
padding: 5px;
cursor: pointer;
text-decoration: none;
border: none;
border-radius: 4px;
box-shadow: 1px 1px 1px darkviolet;
font-size: 16px;
transition: background-color ease-in-out 300ms;
:hover,
:focus {
  background-color: violet;
 
}
`
