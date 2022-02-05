import React from 'react';
import { Box } from '@mui/material';

class LinearGradient extends React.Component {
    constructor( props ) {
        super(props);
    }

    render() {
        return (
        <Box>
            <div style={{backgroundImage: this.props.gradient}}>
                {this.props.children}
            </div>
        </Box>
        );
    }
}

export default LinearGradient;