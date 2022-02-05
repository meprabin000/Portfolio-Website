import { Grid, Box, IconButton } from '@mui/material';
import React from 'react';
import sd from './img/sd.jpeg';
import Wrapper from "./customWrappers/contentWrapper";
import ProjectCard from "./res/projectCard";
import headshot from "./img/headShot.jpg";
import './home.css';
import HeaderBar from './headerBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

class HomeContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box sx={{width:"100%"}}>
                <IntroContent />
                <Portfolio />
                <About />
                <Footer />
            </Box>
            

        );
    }
}

class IntroContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Box class="intro" id="Home">
            <HeaderBar />
            <Grid item container xs={12} sm={12} md={12} lg={12}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box class="intro-content">
                        <h1 >
                            Hello, I'm Prabin
                            <span>
                            Currently a Junior in Computer Science at The University of Texas at Arlington
                            </span>
                        </h1>
                    </Box> 
                </Grid>             
            </Grid>
            </Box>
        );
    }
}

class Portfolio extends React.Component {
    render() {
        return (
            <Wrapper title="Projects" padding="10em">
                 <ProjectCard 
                    title="Spam SMS Classifier" 
                    img={sd} date="3rd Jan, 2022" 
                    link="https://github.com/meprabin000/Spam-SMS-Detection-using-Naive-Bayes-Classifier"
                    description= "Classifies spam SMS with 98% accuracy. Trained using UCI dataset."
                 />
                 <ProjectCard 
                    title="Personal Website" 
                    img={sd} date="5th Feb, 2022"
                    link="#Home"
                    description="Built using minimalist design approach to showcase personal project."
                />
                <ProjectCard 
                    title="Car Rental app" 
                    img={sd} date="10th Nov, 2021"
                    link="#Home"
                    description="Fully functional python app that allows vehicle reservation. "
                />
            </Wrapper>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <Wrapper title="About" padding="5em">
                 <Box class="about-image">
                    <img 
                        src={headshot}
                    />
                 </Box>
                 <Box class="about-description">
                    <p>
                    I am currently a junior pursuing computer science. I have some experience in data analytics and operation research. I am currently working on two research: one is developing a stress-level metric for police officers, and the other is creating and managing a relational database of healthcare appointment data and analyzing it to optimize the appointment booking system. 
                    </p>
                 </Box>
                 
            </Wrapper>
        );
    }
}


class Footer extends React.Component {
    render() {
        return (
            <Box class="footer" id="Contact">
                <Box class="outer-footer">
                    <Box class="inner-footer">
                        <IconButton class="footer-icons" href="https://github.com/meprabin000" disableRipple='true'>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton class="footer-icons" href="https://www.linkedin.com/in/prabin-l/"  disableRipple='true'>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton class="footer-icons" href="https://www.facebook.com/pl2019"  disableRipple='true'>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton class="footer-icons" href="mailto:meprabin000@gmail.com"  disableRipple='true'>
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box class="footer-copyright">
                    <p><span>&copy;</span> 2022, Prabin Lamichhane. All rights reserved.</p>
                </Box>
            </Box>
        );
    }
}


export default HomeContent;