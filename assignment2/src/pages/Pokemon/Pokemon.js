import React from 'react';
import { Link } from 'react-router-dom';
import "./Pokemon.css";


const Pokemon = ({ name, id }) => {
    return (
        <Link to={`/pokemon/${name}`} className="pokemon-container">
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                alt={name}
                className="pokemon-image"
            />
            <h3 className="pokemon-name">#{id} {name}</h3>
        </Link>
    );
};

export default Pokemon;
