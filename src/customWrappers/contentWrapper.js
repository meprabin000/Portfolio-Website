import React from 'react';
import { Typography, Grid, Box, Link, Avatar } from '@mui/material';
import colors from "../res/colors";
import '../home.css';


class Wrapper extends React.Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <Box class="wrapper" id={this.props.title}>
            <Grid item container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box class='wrapper-title'>
                        <Typography variant="h3" align='center'>
                            {this.props.title}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item container xs={12} sm={12} md={12} lg={12}>
                    {this.props.children}   
                </Grid>
            </Grid>
            </Box>
        );
    }
}

export default Wrapper;