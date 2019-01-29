import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Tilt from "react-tilt";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/dist/styles/prism';
import Zoom from 'react-reveal/Zoom';

class Documentation extends React.Component {
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
            <article className="documentation-article">
                <Zoom top>
                    <Tilt className="tilt-documentation" options={{max: 2, scale: 1.05}}>
                        <ExpansionPanel className='documentation-expansionPanel'>
                            <ExpansionPanelSummary>
                                <Typography><strong className="documentation-title">{this.state.title}</strong></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className="documentation-details">
                                <Typography className="documentation-content">
                                    <p>{this.state.content}.</p>
                                    <SyntaxHighlighter language='jsx' style={atomDark} className="documentation-code" wrapLines={true} children={tempCode} />
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Tilt>
                </Zoom>
            </article>
        )
    }
}

export default Documentation;