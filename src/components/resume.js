import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className="resume-content">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img
              src="https://i.imgur.com/TUAzggY.jpg"
              alt="avatar"
              className="avatar-img"
            />
            </div>

            <h2 style={{paddingTop: '2em'}}>Walker Forrester</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #000', width: '50%'}}/>
            <p>Full Stack Web Developer able to build a Web presence from the ground up.
Skilled at writing reusable and modern code as well as working under pressure and meeting deadlines.
Fast learner, extremely hard worker and team player who is constantly improving and pushing himself to learn more.</p>
            <hr style={{borderTop: '3px solid #000', width: '50%'}}/>
            <h5>Address</h5>
            <p>5475 Kent Rock RD, Loganville, GA, 30052</p>
            <h5>Phone</h5>
            <p>470-373-3117</p>
            <h5>Email</h5>
            <p>walker@empirex.tech</p>
            <hr style={{borderTop: '3px solid #000', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              schoolName="Georgia Tech Coding Bootcamp"
              schoolDescription="An intensive 12-week boot camp dedicated to designing and building web applications. Skills learned consisted of HTML5, CSS3, Javascript, jQuery, Bootstrap, Node Js, MySQL, Sequelize, MongoDB, Mongoose, Express, Handlebars JS, & React Js. Learned the fundamentals of Frontend and Backend. Worked on group projects inside of Github. Experience with object oriented and functional programming."
               />
                <hr style={{borderTop: '3px solid #fff'}} />
              <h2>Experience</h2>
                <Experience
                startYear={2018}
                endYear={"Now"}
                jobName="Traxn (social media web app)"
                jobDescription="Worked on the frontend and designed the UI for a social media web app. Currently working on optimizing the application as well as bringing it to mobile devices via React Native."
                />
                <Experience
                startYear={2018}
                endYear={"Now"}
                jobName="Grocer-Easy(Market/Product finder)"
                jobDescription="Created a many-to-many relationship SQL database w/ Sequelize.js + created a “places near me” feature for a store finder app. Planning to remake the app for mobile devices and seek out clients to add their store's products to the app's database."
                />
                <Experience
                startYear={2014}
                endYear={"Now"}
                jobName="Music Producer/Engineer"
                jobDescription="Freelance beat producer and audio engineer. Experience in meeting customers needs + paying attention to detail + bringing an artistic approach to the work space."
                />
              <hr style={{borderTop: '3px solid #fff'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/SCSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={90}
                    />
                    <Skills
                    skill="Mongoose"
                    progress={75}
                    />
                    <Skills
                    skill="MySQL"
                    progress={75}
                    />
                    <Skills
                      skill="React"
                      progress={90}
                      />
                      <Skills
                      skill="React Native"
                      progress={70}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;