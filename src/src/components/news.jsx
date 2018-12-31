import React from 'react';
import Tilt from 'react-tilt';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Fade from 'react-reveal/Fade';

class NewsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: this.props.icons,
            title: this.props.title,
            content: this.props.content,
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    render() {
        return (
            <>
                <Fade>
                    <Tilt className="Tilt" options={{max: 25}}>
                        <article className="news-elements">
                            <i class={this.props.icons}></i>
                            <h4 className="news-h4">{this.props.title}</h4>
                            <p className="news-paragraph">{this.props.content}</p>
                            <button className="news-button" onClick={this.toggle}>Czytaj więcej</button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                                <ModalBody>
                                    {this.state.content}
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Przejdź do strony</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Wyjdź</Button>
                                </ModalFooter>
                            </Modal>
                        </article>
                    </Tilt>
                </Fade>
            </>
        )
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
}

export default NewsContainer;