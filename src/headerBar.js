import React from 'react';
import { AppBar, Grid, Toolbar, IconButton, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import colors from './res/colors';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeRepairServiceRoundedIcon from '@mui/icons-material/HomeRepairServiceRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import './App.css';

class HeaderBar extends React.Component {
    constructor(props) {
        super(props);
        this.navItems = ['Contact','About','Projects','Home'];
    }

    render() {
        return (
        <Grid container item xs={12} sm={12} md={12} lg={12}>
            <Box class="navigation-bar">
                <Box class="navigation-panel">
                    {this.navItems.map( (navItem) => 
                        (navigationItem(navItem, "#".concat(navItem))))}

                </Box>
            </Box>
        </Grid>
            
        )
    }
}


function navigationItem(title, link) {
    return <p><a href={link}>{title}</a></p>;
}

export default HeaderBar;
