import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
} from "react-mdl";


class Projects extends Component {
  state = {
    activeTab: 0
  };

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          

          <div
            shadow={5}
            style={{ minWidth: "450", margin: "20px" }}
            className="card"
          >
            <div className="card-content">
              <div className="front">
                <h4>Employee Directory</h4>
                <div className="techBoxes">
                  <p>html</p>
                  <p>css</p>
                  <p>js</p>
                </div>
              </div>
              <div className="back">
                <h4>CryptPro</h4>
                <div className="appLinks">
                  <p>
                    <a style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank"
                      href="https://walkforr.github.io/employeeDirectHW/" >VIEW APP</a>
                  </p>
                  <p>
                    <a style={{ textDecoration: "none" }} 
                    href="https://github.com/walkforr/employeeDirectHW" >REPO</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            shadow={5}
            style={{ minWidth: "450", margin: "20px" }}
            className="card"
          >
            <div className="card-content">
              <div className="front">
                <h4>Compatiblity Survey</h4>
                <div className="techBoxes">
                  <p>html</p>
                  <p>css</p>
                  <p>js</p>
                  <p>jQuery</p>
                  <p>node</p>
                  <p>ajax</p>
                  <p>express</p>
                </div>
              </div>
              <div className="back">
                <h4>CryptPro</h4>
                <div className="appLinks">
                  <p>
                    <a style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank"
                      href="https://tranquil-cliffs-31043.herokuapp.com/" >VIEW APP</a>
                  </p>
                  <p>
                    <a style={{ textDecoration: "none" }} 
                    href="https://github.com/walkforr/EmployeeFinder" >REPO</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            shadow={5}
            style={{ minWidth: "450", margin: "20px" }}
            className="card"
          >
            <div className="card-content">
              <div className="front">
                <h4>Store w/ Stripe Integration</h4>
                <div className="techBoxes">
                  <p>html</p>
                  <p>css</p>
                  <p>bootstrap</p>
                  <p>handlebars</p>
                  <p>js</p>
                  <p>node</p>
                  <p>ajax</p>
                  <p>mongodb</p>
                  <p>mongoose</p>
                  <p>express</p>
                  <p>bcrypt</p>
                  <p>passport</p>
                  <p>stripe api</p>
                </div>
              </div>
              <div className="back">
                <h4>CryptPro</h4>
                <div className="appLinks">
                  <p>
                    <a style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank"
                      href="https://safe-stream-27024.herokuapp.com/" >VIEW APP</a>
                  </p>
                  <p>
                    <a style={{ textDecoration: "none" }} 
                    href="https://github.com/jtmccormick18/project1" >REPO</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            shadow={5}
            style={{ minWidth: "450", margin: "20px" }}
            className="card"
          >
            <div className="card-content">
              <div className="front">
                <h4>Kudos</h4>
                
                <div className="techBoxes">
                  <p>html</p>
                  <p>css</p>
                  <p>js</p>
                  <p>node</p>
                  <p>ajax</p>
                  <p>mongodb</p>
                  <p>mongoose</p>
                  <p>express</p>
                </div>
              </div>
              <div className="back">
              <h4>CryptPro</h4>
                <div className="appLinks">
                  <p>
                    <a style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank"
                      href="https://desolate-spire-26134.herokuapp.com/" >VIEW APP</a>
                  </p>
                  <p>
                    <a style={{ textDecoration: "none" }} 
                    href="https://github.com/walkforr/Kudos" >REPO</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
             
          <div
            shadow={5}
            style={{ minWidth: "450", margin: "20px" }}
            className="card"
          >
            <div className="card-content">
              <div className="front">
                <h4>Portfolio</h4>
                
                <div className="techBoxes">
                  <p>scss</p>
                  <p>js</p>
                  <p>react</p>
                </div>
              </div>
              <div className="back">
              <h4>CryptPro</h4>
                <div className="appLinks">
                  <p>
                    <a style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank"
                      href="https://limitless-sea-42221.herokuapp.com/" >VIEW APP</a>
                  </p>
                  <p>
                    <a style={{ textDecoration: "none" }} 
                    href="https://github.com/walkforr/wfPortfolio" >REPO</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
            
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <div
            shadow={5}
            style={{ minWidth: "450", margin: "20px" }}
            className="card"
          >
            <div className="card-content">
              <div className="front">
                <h4>CryptPro</h4>
                <div className="techBoxes">
                  <p>html</p>
                  <p>css</p>
                  <p>js</p>
                  <p>node</p>
                  <p>ajax</p>
                  <p>chartJS</p>
                </div>
              </div>
              <div className="back">
                <h4>CryptPro</h4>
                <div className="appLinks">
                  <p>
                    <a style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank"
                      href="https://jtmccormick18.github.io/project1/" >VIEW APP</a>
                  </p>
                  <p>
                    <a style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank"
                    href="https://github.com/jtmccormick18/project1" >REPO</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

 <div
            shadow={5}
            style={{ minWidth: "450", margin: "20px" }}
            className="card"
          >
            <div className="card-content">
              <div className="front">
                <h4>GrocerEasy</h4>
                <div className="techBoxes">
                  <p>html</p>
                  <p>css</p>
                  <p>js</p>
                  <p>node</p>
                  <p>ajax</p>
                  <p>MySQL</p>
                  <p>Sequelize</p>
                </div>
              </div>
              <div className="back">
                <h4>CryptPro</h4>
                <div className="appLinks">
                  <p>
                    <a style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank"
                      href="https://warm-earth-30735.herokuapp.com/" >VIEW APP</a>
                  </p>
                  <p>
                    <a style={{ textDecoration: "none" }} rel="noopener noreferrer" target="_blank"
                    href="https://github.com/walkforr/GrocerEasy" >REPO</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>Fullstack</h1>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <h1>Mobile Apps</h1>
        </div>
      );
    }
  } 

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Solo</Tab>
          <Tab>Group</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
