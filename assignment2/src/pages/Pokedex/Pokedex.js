import React, { useState, useEffect } from 'react';
import Pokemon from '../Pokemon/Pokemon';
import "./Pokedex.css";
import Pikachu from '../../img/Running-Pikachu-GIF.webp'



const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState([]); // To store the list of Pokémon
    const [currentPage, setCurrentPage] = useState(1); // To manage the current page
    const itemsPerPage = 12; // Number of Pokémon to display per page

    useEffect(() => {
        // Fetch Pokémon data when the component mounts or when currentPage changes
        fetchPokemonData();
    });

    const fetchPokemonData = () => {
        // Calculate the offset to fetch the Pokémon for the current page
        const offset = (currentPage - 1) * itemsPerPage;

        // Fetch a list of Pokémon using the offset and itemsPerPage
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemonList(data.results);
            });
    };

    return (
        <>
            <div className="pokedex-container">
                {pokemonList.map((pokemon, index) => (
                    <Pokemon key={pokemon.name} name={pokemon.name} id={((currentPage - 1) * itemsPerPage) + index + 1} />
                ))}


            </div>
            <div className='button-container'>
                <img src={Pikachu} alt='pikachu-running-left' className='pikachu-running-left'></img>

                <button className='button'
                    onClick={() => {
                        if (currentPage > 1) {
                            setCurrentPage(currentPage - 1);
                        }
                    }}
                >
                    Previous
                </button>
                <button className='button'
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                    }}
                >
                    Next
                </button>
                <img src={Pikachu} alt='pikachu-running-right' className='pikachu-running-right'></img>
            </div>
        </>
    );
};

export default Pokedex;




