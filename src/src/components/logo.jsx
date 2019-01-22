import React from 'react';
import logo from '../images/LogoMain.svg';
import Tilt from 'react-tilt';
import {goToAnchor} from 'react-scrollable-anchor'

class Logo extends React.Component {
    buttonClick = () => {
        goToAnchor('section1', true);
    };

    render() {
        return (
            <article className="logo-article">
                <Tilt className="Tilt" options={{max: 25}}>
                    <figure>
                    <img src={logo} alt='React Logo' className="logo"/>
                    </figure>
                </Tilt>
                <div className="logo-article">
                    <h1>REACT</h1>
                    <h2>ASTRONAUT</h2>
                    <button onClick={this.buttonClick}>
                        <i className="fas fa-chevron-down fa-2x" style={{marginTop: '0.25rem'}}/>
                    </button>
                </div>
            </article>
        );
    }
}

export default Logo;

