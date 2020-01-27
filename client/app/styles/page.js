import styled from "styled-components";

export const CharacterInfo = styled.div `
  text-align: justify;
  padding: 3rem;
  font: 1em sans-serif;
`;
export const Spinner = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  width: 50px;
  border-top: 16px solid #3498db;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
`;
export const CharacterImage = styled.div `
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2px;
    margin: 5px;
  }

  .characters img {
    margin-right: 3%;
    margin-bottom: 1.5em;
  }

  .data-loading {
    display: flex;
    justify-content: center;
  }
`
export const CardStyle = styled.div `
    border: 1px solid #0003;
    width: fit-content;
    margin-bottom: 5px;
    border-radius: 4px;
    margin: 20px;
    box-shadow: 0 5px 5px 5px #0003;
    overflow: hidden;
    margin-right: 3%
  
`
