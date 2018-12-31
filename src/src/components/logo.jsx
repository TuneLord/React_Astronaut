import React from 'react';
import logo from '../images/reactLogoMain.svg';
import Tilt from 'react-tilt';
import { goToAnchor } from 'react-scrollable-anchor'

class Logo extends React.Component {
    buttonClick = () => {
        goToAnchor('section1', true);
    };

    render() {
        return (
            <div className="logo-container">
                <Tilt className="Tilt" options={{max: 25}}>
                        <img src={logo} alt='React Logo' className="logo"/>
                </Tilt>
                <div className="logo-container">
                    <h1 className={'logo-h1 scale-up-center'}>REACT</h1>
                    <h2 className={'logo-h2 scale-up-center'}>ASTRONAUT</h2>
                    <button className={'logo-button fadeIn'} onClick={this.buttonClick}>
                        <i class="fas fa-chevron-down fa-2x" style={{marginTop: '4px'}}></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Logo;

