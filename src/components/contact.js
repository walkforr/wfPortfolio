import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Walker Forrester</h2>
            <img
              src="https://i.imgur.com/TUAzggY.jpg"
              alt="avatar"
              className="avatar-img"
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining
            </p>
          </Cell>
          <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />

        <div className="contact-list">
        <List>
            <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
              <i className="fa fa-phone" aria-hidden="true" />
              4447-933-9993
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
              <i className="fa fa-envelope" aria-hidden="true" />
              walker@empirex.tech
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
              <i className="fa fa-skype" aria-hidden="true" />
              live:3bf29f3193369208
              </ListItemContent>
            </ListItem>

          </List>
        </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
