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
        const tempCode = this.state.code.replace(/_b/g,'\n');
        return (
            <article className="goodPractices-article">
                <Flip top>
                    <h2>{this.state.title}</h2>
                    <p>{this.state.content}</p>
                    <Tilt className="Tilt" options={{max: 1, scale: 1}}>
                        <SyntaxHighlighter language='jsx' style={atomDark} className="goodPractices-code" wrapLines={true} children={tempCode} />
                    </Tilt>
                </Flip>
            </article>
        );
    }
}

export default GoodPractices;