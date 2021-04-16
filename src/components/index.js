import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  height: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-direction: column;
`;
export const Header = styled.header`
    width: 100%;
    height: 100px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:black;

    h1 {
        color: white;
        font-size: 80px;
        text-align: center;

    }
`
export const BodyPokedex = styled.div `
    width: 1400px;
    background-color:red;
    height: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
export const PokemonCard = styled.div `
    width: 300px;
    height: 300px;
    border-radius: 20px;
    margin-bottom: 20px;
    margin-right: 30px;
    background-color: cyan;
    margin-left: 30px;
    margin-top: 30px;
    border: 1px solid black;
`;
