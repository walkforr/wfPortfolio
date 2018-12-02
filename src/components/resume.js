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
            <p>Junior Full Stack Web Developer able to build a Web presence from the ground up.
Skilled at writing reusable and modern code as well as working under pressure and meeting deadlines.
Fast learner, extremely hard worker and team player who is constantly improving and pushing hisself to learn more.</p>
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
              schoolDescription="Learned the fundamentals of Frontend and Backend. Worked on group projects inside of Github. Experience with object oriented and functional programming."
               />
                <hr style={{borderTop: '3px solid #fff'}} />
              <h2>Experience</h2>
              <Experience
                startYear={2014}
                endYear={2018}
                jobName="Music Producer/Engineer"
                jobDescription="Freelance beat producer and audio engineer. Experience in meeting customers needs + paying attention to detail + bringing an artistic approach to the work space."
                />
                <Experience
                startYear={2014}
                endYear={2015}
                jobName="Hatcher Electric"
                jobDescription="Worked as an electrician assistant dealing with problem solving and beating deadlines. Experience working long hours + learning how to work with others."
                />
                <Experience
                startYear={2015}
                endYear={2016}
                jobName="Accurate Fence"
                jobDescription="Built fences as a laborer. Experience working long hours + talking with customers and meeting their needs + working to beat deadlines + problem solving."
                />
              <hr style={{borderTop: '3px solid #fff'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="CSS/SCSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={90}
                    />
                    <Skills
                    skill="MongoDB"
                    progress={75}
                    />
                    <Skills
                    skill="MySQL"
                    progress={75}
                    />
                    <Skills
                      skill="React"
                      progress={55}
                      />
                      <Skills
                      skill="Swift"
                      progress={15}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;