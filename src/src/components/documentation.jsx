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
        return (
            <>
                <Zoom top>
                    <Tilt className="Tilt" options={{max: 2, scale: 1.05}}>
                        <ExpansionPanel className='documentation-expansionPanel'>
                            <ExpansionPanelSummary>
                                <Typography><strong className="documentation-title">{this.state.title}</strong></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography className="documentation-content">
                                    {this.state.content}.
                                    <SyntaxHighlighter language='javascript' style={atomDark} className="documentation-codeStyle">
                                        {this.state.code}
                                    </SyntaxHighlighter>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Tilt>
                </Zoom>
            </>
        )
    }
}

export default Documentation;