import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./PokemonDetail.css";


const PokemonDetail = () => {
    /* NOTES: useState is a hook that allows us to declare state variables
    - const [pokemon, setPokemon] = useState(); initializes a state variable named pokemon to store information 
    about the selected Pokémon + setPokemon is a function we use to update the pokemon state 
    */
    const [pokemon, setPokemon] = useState(); // State to store the Pokemon info
    const { name } = useParams(); // Extract the Pokemon name from the URL parameter
    const [isSpinning, setSpinning] = useState(false);

    /* NOTES: useEffect is another React hook that allows us to perform side effects in our components (Pokedex, PokedexDetail, etc)
    - The effect runs when the component is mounted and whenever 'name' changes
    */
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data); // Update the 'pokemon' state with the fetched data
            });
    }, [name]);

    const handleImageClick = () => {
        setSpinning(!isSpinning);
    };

    /* This effect makes the pokemon image spin for a pre-defined interval */
    useEffect(() => {
        if (isSpinning) {
            const intervalId = setInterval(() => {
                setSpinning(false);
                clearInterval(intervalId);
            }, 1000); // Stop spinning after 2 seconds
        }
    }, [isSpinning]);



    return (
        <>
            {pokemon && (
                <div className="pokemon-detail-container">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                        alt={name}
                        className={`pokemon-picture ${isSpinning ? 'spin-animation' : ''}`}
                        onClick={handleImageClick}
                    />
                    <table className='pokemon-table'>
                        <tr>
                            <td>Name</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Abilities</td>
                            <td>{pokemon.abilities.map(ability => ability.ability.name).join(', ')}</td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>{pokemon.types.map(type => type.type.name).join(', ')}</td>
                        </tr>
                        <tr>
                            <td>Height</td>
                            <td>{pokemon.height / 10} m</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{pokemon.weight / 10} Kg</td>
                        </tr>

                    </table>
                </div >
            )}
        </>
    );
};

export default PokemonDetail;
