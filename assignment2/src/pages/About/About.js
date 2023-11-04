import "./About.css";
import AboutPokedex from '../../img/7175e0d345e25ab8ed746bf104aea4fe.png'


const About = () => {
    return (
        <div className="about-container">
            <img src={AboutPokedex} className='headline' alt='headline-about-pokedex'></img>
            <p>
                This page was created as assignment for WEB2 class in 4th semester of Software Engineering degree at VIA University College.
            </p>
            <p>
                The requirements of the assignment can be found here:
            </p>
            <a className="assignment" href='https://github.com/KasperKnop/WEB2/tree/main/08%20Assignment%202'>
                Assignment 2 - Requirements
            </a>
            <p>
                I hope you enjoy exploring the site and discovering new aspects of the Pokemon universe. Don't hesitate to reach out if you have any questions or suggestions.
            </p>
        </div>
    );
};

export default About;
