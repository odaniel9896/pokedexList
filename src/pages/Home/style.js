import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  background: linear-gradient(90deg, rgba(9,0,36,1) 0%, rgba(3,16,53,1) 8%, rgba(9,78,121,1) 20%, rgba(9,80,126,1) 21%, rgba(0,144,255,1) 100%);
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

    h1 {
        color: white;
        font-size: 80px;
        text-align: center;

    }
`
export const BodyPokedex = styled.div `
    width: 1400px;
    height: auto;
    margin-top: 30px;
    border-radius: 10px;
    
    display: flex;
    flex-direction: row;
    background-color: white;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;
export const PokemonCard = styled.div `
    width: 300px;
    height: 300px;
    border-radius: 20px;
    margin-bottom: 20px;
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 30px;
    border: 1px solid black;
    padding-top: 20px;
    box-shadow: 0px 1px 5px black;
    align-items:center;    
    display:flex;
    flex-direction: column;

`;
export const PokemonImage = styled.div `
    width: 90%;
    height: 200px;
    text-align: center;
    img {
        width: 90%;
        height: 100%;
    }
`;
export const PokemonName = styled.div`
    width: 90%;
    border-radius: 10px;
    height: 50px;
    margin-top: 10px;
    align-items:center;
    display:flex;
    text-transform: capitalize;
    justify-content:center;

    h2 {
        font-size: 35px;
        color: black;
        font-family: sans-serif;
    }
`;
