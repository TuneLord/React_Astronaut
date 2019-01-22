import React from 'react';
import Tilt from 'react-tilt';
import Fade from 'react-reveal/Fade';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import GoodPractices from "../js/App";

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
                        <article className="news-article" onClick={this.toggle}>
                            <div>
                                <img src={this.props.icons} alt={this.state.title}/>
                                <h4>{this.props.title}</h4>
                                <p>{this.props.content}</p>
                            </div>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                                <ModalBody>
                                    <h6>Opis</h6>
                                    <p>{this.state.content}</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}><a className="news-links"
                                                                                     href={this.state.webpage}
                                                                                     target="_blank"
                                                                                     rel="noopener noreferrer">Czytaj
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