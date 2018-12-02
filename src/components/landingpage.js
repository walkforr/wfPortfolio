import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <div className="home-content">
                <div className="banner-text">
                    <h1>Welcome</h1>

                    <hr/>
                    <p>
                    <Link className="homelinks" style={{ color: 'black', marginRight: '40px', textDecoration: 'none' }} to="/resume">Resume</Link> |
                    <Link className="homelinks" style={{ color: 'black', margin: '40px', textDecoration: 'none' }} to="/aboutme">About Me</Link> | 
                    <Link className="homelinks" style={{ color: 'black', margin: '40px', textDecoration: 'none' }} to="/projects">Projects</Link> | 
                    <Link className="homelinks" style={{ color: 'black', margin: '40px', textDecoration: 'none' }} to="/contact">Contact</Link></p>
                </div>
                <div className="social-links" >

                    
                    <a href="https://github.com/walkforr" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square"></i>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/walker-forrester-011735166/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin"></i>
                    </a>

                    <a href="https://stackexchange.com/users/13528382/walkerlabs?tab=activity" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-stack-overflow"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default Landing;