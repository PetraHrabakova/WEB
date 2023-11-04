import { Link } from 'react-router-dom';
import React from 'react';
import Pokedex from '../img/3a93b3a770f738e70b9f89412489ef6d.png'
import WEB2 from '../img/af8894fd840c8cb35441b0688160c3a8.png'
import Pikachu from '../img/025Pikachu_XY_anime_4.webp'

const Footer = () => {
    return (
        <footer className='footer'>
            <Link to="/">
                <img src={Pokedex} alt='pokedex' className='pokedex-footer'></img>
            </Link>
            <img src={WEB2} alt='pokedex' className='web2-footer'></img>
            <div className='name-container'>
                <img src={Pikachu} alt='pikachu' className='pikachu'></img>
                <h2>Petra Hrabakova<br />VIA University College</h2>
            </div>
        </footer>
    );
}

export default Footer;
