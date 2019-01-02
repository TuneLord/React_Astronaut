import React from 'react';
import Tilt from 'react-tilt';
import Fade from 'react-reveal/Fade';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class NewsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: this.props.icons,
            title: this.props.title,
            content: this.props.content,
            webpage: this.props.webpage,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <>
                <Fade>
                    <Tilt className="Tilt" options={{max: 25}}>
                        <article className="news-article">
                            <i class={this.props.icons}/>
                            <h4>{this.props.title}</h4>
                            <p>{this.props.content}</p>
                            <button onClick={this.toggle}>Czytaj więcej</button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                                <ModalBody>
                                    <h3>Informacje</h3>
                                    <p>{this.state.content}</p>
                                    <h3>Poradniki i tutoriale</h3>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}><a className="news-links"
                                                                                     href={this.state.webpage}
                                                                                     target="_blank">Czytaj
                                        więcej</a></Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Wyjdź</Button>
                                </ModalFooter>
                            </Modal>
                        </article>
                    </Tilt>
                </Fade>
            </>
        )
    }
}

export default NewsContainer;