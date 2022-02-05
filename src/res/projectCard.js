import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton, CardActionArea, CardActions, Grid, CardHeader } from '@mui/material';
import colors from "./colors";
import GitHubIcon from '@mui/icons-material/GitHub';
import '../project.css';

class ProjectCard extends React.Component {
    render() {
        return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
            <Box class="outer-card">
              <a href={this.props.link} target='_blank'>
                <Box class="inner-card">
                  <Box class="card-header">
                    <p>{this.props.title}</p>
                  </Box>
                  <Box class="card-content">
                    <Box class="card-content-description">
                      <p>{this.props.description}</p>
                    </Box>
                    <Box class="card-content-img">
                      <img src={this.props.img} />
                    </Box>
                  </Box>
                  <Box class="card-meta">
                    Published date: {this.props.date}
                  </Box>
                </Box>
                
              </a>
            </Box>
            
            </Grid>
          );
    }
  
}

export default ProjectCard;