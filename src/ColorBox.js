// For copying content to the clipboard we use https://www.npmjs.com/package/react-copy-to-clipboard

import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from "./styles/ColorBoxStyles";
import classNames from 'classnames';
import { withStyles } from '@material-ui/styles';

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { name, background, moreUrl, showingFullPalette, classes } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background: background }} className={classes.ColorBox}>
          <div style={{ background: background }}
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: copied,
            })} />
          <div className={classNames(classes.copyMessage, {
            [classes.showMessage]: copied,
          })}>
            <h1>COPIED!</h1>
            <p className={classes.copyText}>
              {this.props.background}
            </p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={(evt) => evt.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard >

    );
  }
}

export default withStyles(styles)(ColorBox);
