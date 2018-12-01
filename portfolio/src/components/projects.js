import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell,
    Card, CardTitle, CardActions, Button,
    CardText, CardMenu, IconButton} from 'react-mdl';

// const GitHub = () => (
//     <button className="GitHub " onClick={props.githubHandler}>GitHub</button>
// )

class Projects extends Component {
    state = {
        activeTab: 0
    }

    // handleGithub = (event) => {
    //     window.location.hash = ''
    // }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return (

            <div className="projects-grid">

                <div shadow={5} style={{minWidth: '450', margin: '20px'}} className="card">
                <div className="card-content">
                
                <div className="front"></div>
                

                </div>
                
                </div>

                <Card className="card" shadow={5} style={{minWidth: '450', margin: '20px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://reactjs.org/logo-og.png) center / cover'}} > React Project #1
                    </CardTitle>
                    <CardActions border>
                        {/* <GitHub 
                        githubHandler = {this.handleGithub}
                        /> */}
                        <Button colored>View App</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    <CardText>
                    </CardText>
                </Card>

                
                <Card className="card" shadow={5} style={{minWidth: '450', margin: '20px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://reactjs.org/logo-og.png) center / cover'}} > React Project #1
                    </CardTitle>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>View App</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                        <a href="https://github.com/walkforr" rel="noopener noreferrer" target="_blank"></a>
                    </CardMenu>
                    <CardText>
                    </CardText>
                </Card>

                
                <Card className="card" shadow={5} style={{minWidth: '450', margin: '20px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://reactjs.org/logo-og.png) center / cover'}} > React Project #1
                    </CardTitle>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>View App</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    <CardText>
                    </CardText>
                </Card>

                <Card className="card" shadow={5} style={{minWidth: '450', margin: '20px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:
                    'url(https://reactjs.org/logo-og.png) center / cover'}} > React Project #1
                    </CardTitle>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>View App</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                    <CardText>
                    </CardText>
                </Card>

            </div>

            )
        } else if(this.state.activeTab === 1) {
            return (
                <div><h1>Basic Js</h1> </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>Fullstack</h1></div>
            )
        }else if(this.state.activeTab === 3) {
            return (<div><h1>Mobile Apps</h1></div>)
        }
    }

    render() {
        return (
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>React</Tab>
            <Tab>Basic JS Apps</Tab>
            <Tab>Full Stack Apps</Tab>
            <Tab>Mobile Apps</Tab>
            </Tabs>

            <section className="projects-grid">
            <Grid className="projects-grid">
            <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
            </Cell>
            </Grid>
            
            </section>
            </div>
        )
    }
}

export default Projects;