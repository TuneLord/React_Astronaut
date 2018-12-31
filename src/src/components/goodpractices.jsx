import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/styles/prism';
import Tilt from "react-tilt";
import Flip from 'react-reveal/Flip';

class GoodPractices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            content: this.props.content,
            code: this.props.code,
        }
    }

    render() {
        return (
            <>
                <Flip top>
                    <div className="goodpractices-containerStyle">
                        <h2 className="goodpractices-h2">{this.state.title}</h2>
                        <p className="goodpractices-paragraph">{this.state.content}</p>
                        <Tilt className="Tilt" options={{max: 2, scale: 1}}>
                            <SyntaxHighlighter language='javascript' style={atomDark}
                                               className="goodpractices-codeStyle">
                                {this.state.code}
                            </SyntaxHighlighter>
                        </Tilt>
                    </div>
                </Flip>
            </>
        );
    }
}

export default GoodPractices;