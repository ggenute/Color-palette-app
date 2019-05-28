import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
    "& h1": {
      color: "white"
    }
  },
  secondary: {
    backgroundColor: "pink",
    "& h1": {
      color: "yellow",
      "& span": {
        textDecoration: "underline"
      }
    }
  }
}

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <div className={classes.secondary}>
        some text
        <h1>inside secondary class. <span>Text underline</span></h1>
        <span>SPAN text, but not in h1</span>
      </div>
    </div>
  )
}

export default withStyles(styles)(MiniPalette);