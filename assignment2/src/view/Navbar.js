import { Link } from 'react-router-dom';
import pokeballImage from '../img/pokemon-1635904_640.webp';
import pokemonLogo from '../img/International_Pokémon_logo.svg.png'
import aboutSign from '../img/8ca447394905e0711cb81f1de9c1379d.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='logo-container'>
                <img className='pokemon-logo' src={pokemonLogo} alt='pokemon-logo'></img>
                <div className='snorlax'></div>
            </div>


            <div className='center-container'>
                <Link to="/">
                    <img className='pokedex-icon' src={pokeballImage} alt='pokebal'></img>
                </Link>
            </div>


            <div className='about-sign-container'>
                <Link to="/about">
                    <img className='about-sign' src={aboutSign} alt='about-sign'></img>
                </Link>
            </div>

        </nav >
    );
};

export default Navbar;
