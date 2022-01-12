import logo from './logo.svg';
import './App.css';
import React from 'react';
import profileImage from './img/MainContent-Right-Img.jpg'

// Main app display
class App extends React.Component {
  render() {
    return (
    <div className="home">
      <Header />
      <MainContent left={
        <Container className="Intro">
          <p><strong>Hello, <span>I'm Prabin</span> </strong></p>
          <h1>I am an aspiring Computer Scientist/Data Scientist</h1>
          <h2>Interested in Software Development, Signal Processing, and Data Analytics</h2>
        </Container>
      }
      />
    </div>
    );
  }
}

// Header with the navigation bar
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <NavBar>
      <NavItem name="Home" />
      <NavItem name="About" />
      <NavItem name="Blogs" />
      <NavItem name="Portfolio" />
    </NavBar>
    );
  }
}

// Main content section below the navigation bar
class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Main-Content'>
        <div className="Main-Content-Left">
          {this.props.left}
        </div>
        <div className="Main-Content-Right">
          {this.props.right}
        </div>
      </div>
    );
  }
}

// Navigation bar that holds and aligns the navigation items
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="Nav-Bar">
        {this.props.children}
      </nav>
    );
  }
}

// Navigation item in the navigation bar eg. Home, About, Portfolio
class NavItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Nav-Item" align={this.props.align}>
        <a href="#">{this.props.name}</a>
      </div>
    );
  }
}

// Container for main content
class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );

  }
}

export default App;
