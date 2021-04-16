import { useState, useEffect } from "react";
import { api } from "../../services/api"
import charizard from "../../assets/charizard.png"
import { Container, Header, BodyPokedex, PokemonCard, PokemonImage, PokemonName } from "./style"

// function ComponentCard({ pokemon }) {


//     const [pokemonCard, setPokemonCard] = useState([])
//     const [reload, setReload] = useState(null);

//     useEffect(() => {
//         setPokemonCard(pokemon)
//     }, [pokemonCard])


//     return (
//         <>
//             {/* {  .map((poke) => ( */}

//             {/* ))} */}

//         </>
//     )
// }

function Home() {


    const [pokemon, setPokemon] = useState([]);
    const [pokemonImage, setPokemonImage] = useState([]);
    const [reload, setReload] = useState(null);

    const loadPokemons = async () => {
        const response = await api.get("?limit=151&offset=1");
        setPokemon(response.data.results)
    };

  
    useEffect(() => {
        loadPokemons(true);


    }, [reload]);
    return (
        <Container>
            <Header>
                <h1>
                    Pokedex
                </h1>
            </Header>
            <BodyPokedex>
                {pokemon.map((poke) => (
                    <PokemonCard key={poke.id}>
                        <PokemonImage>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`} alt="charizard" />
                        </PokemonImage>
                        <PokemonName>
                            <h2> #009 {poke.name}</h2>
                        </PokemonName>
                    </PokemonCard>
                ))}


            </BodyPokedex>
        </Container>
    )
}

export default Home