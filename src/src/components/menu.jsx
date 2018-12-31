import React from 'react';
import {stack as Menu} from 'react-burger-menu';
import logo from '../images/reactlogo.svg';

class MainMenu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }

    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
        this.setState({menuOpen: false})
    }

    render () {
        return (
            <>
                <Menu right isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)} style={{width:"500px"}}>
                    <a id="logo" className="menu-links" href="#section0" onClick={() => this.closeMenu()}><img src={logo} className="menu-img" alt="React Logo"/></a>
                    <a id="news" className="menu-links" href="#section1" onClick={() => this.closeMenu()}> Co nowego?</a>
                    <a id="goodpractices" className="menu-links" href="#section2" onClick={() => this.closeMenu()}> Dobre praktyki</a>
                    <a id="documentation" className="menu-links" href="#section3" onClick={() => this.closeMenu()}> Dokumentacja</a>
                </Menu>
            </>
        )
    }
}

export default MainMenu;