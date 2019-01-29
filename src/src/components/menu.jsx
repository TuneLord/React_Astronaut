import React from 'react';
import {stack as Menu} from 'react-burger-menu';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen});
    }

    closeMenu() {
        this.setState({menuOpen: false});
    }

    render() {
        return (
            <>
                <Menu right isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}
                      style={{width: "31.25rem"}}>
                    <a id="logo" href="#section0" onClick={() => this.closeMenu()}><i
                        className="fab fa-react"/></a>
                    <a id="news" href="#section1" onClick={() => this.closeMenu()}> Poznaj technologie</a>
                    <a id="goodpractices" href="#section2"
                       onClick={() => this.closeMenu()}> Dobre praktyki</a>
                    <a id="documentation" href="#section3"
                       onClick={() => this.closeMenu()}> Dokumentacja</a>
                </Menu>
            </>
        )
    }
}

export default MainMenu;