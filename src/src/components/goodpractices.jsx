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
            <article className="goodPractices-article">
                <Flip top>

                    <h2>{this.state.title}</h2>
                    <p>{this.state.content}</p>
                    <Tilt className="Tilt" options={{max: 2, scale: 1}}>
                        <SyntaxHighlighter language='javascript' style={atomDark}
                                           className="goodPractices-code">
                            {this.state.code}
                        </SyntaxHighlighter>
                    </Tilt>
                </Flip>
            </article>
        );
    }
}

export default GoodPractices;