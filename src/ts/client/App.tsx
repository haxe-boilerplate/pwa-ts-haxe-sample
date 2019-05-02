import 'typeface-roboto';
import { Grid, Button } from '@material-ui/core';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getVersion } from '../shared/utils';
import { About } from './components/About';

import { getAName } from './utils/usernames';
import { connect } from 'react-redux';

// Pagess
import { Header } from './components/Header';
import { Home } from './components/Home';
import { UsersList } from './components/UsersList';

import SnackBarNotif from './utils/SnackbarNotif';

import * as socket from './utils/socket';

console.log(`The App version is ${getVersion()}`);

interface IProps {
 dispatch: any;
 name: any;
 pot: any;
 names: any;
 snackbarIsOpen: any;
 mode: any;
 whoDidIt: any;
}

class App extends Component<IProps> {
  public componentDidMount() {
    const { dispatch } = this.props;
    const name = getAName();

    socket.getCurrentPot();
    dispatch({type: 'ASSIGNED_USERNAME', name});
    socket.sendNameToServer(name);
  }

  public closeSnackbar = () => (this.props as any).dispatch({type: 'ANOTHER_ONE_PITCHED_IN'});

  public getOne = () => {
    const {dispatch, name} = this.props;
    dispatch({type: 'GET_ONE'});
    socket.sendGetOneToServer(name);
  }

  public pitchIn = () => {
    const {dispatch, name} = this.props;
    dispatch({type: 'PITCH_IN'});
    socket.sendPitchInToServer(name);
  }

  public render() {
    const {
      pot,
      name,
      names,
      snackbarIsOpen,
      mode,
      whoDidIt
    } = this.props;
    return (
      <Grid container justify="center">
        <Grid style={{ textAlign: 'center' }} item xs={12}>
          <h1>{pot}</h1>
        </Grid>
        <Grid style={{ textAlign: 'right', padding: '10px' }} item xs={6}>
          <Button onClick={this.pitchIn} variant="raised" color="primary">
            pitch in!
          </Button>
        </Grid>
        <Grid style={{ textAlign: 'left', padding: '10px' }} item xs={6}>
          <Button onClick={this.getOne} variant="raised" color="secondary">
            get one!
          </Button>
        </Grid>
        <Grid style={{ textAlign: 'center' }} item xs={12}>
          <div
            style={{
              height: '500px',
              textAlign: 'center',
              width: '300px',
              border: '1px solod black',
              display: 'inline-block'
            }}
          >
            Your assigned username is{' '}
            <span style={{ color: 'red' }}>{name}</span>
            <div style={{ padding: '10px' }}>
              Other members:
              {names.length <= 1 ? (
                <div style={{ color: 'red' }}>No other members yet</div>
              ) : (
                names.map(member => (
                  <div
                    style={{ display: name === member && 'none' }}
                    key={member}
                  >
                    {member}
                  </div>
                ))
              )}
            </div>
          </div>
        </Grid>
        <SnackBarNotif
          mode={mode}
          closeSnackbar={this.closeSnackbar}
          name={whoDidIt}
          snackbarIsOpen={snackbarIsOpen}
        />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  pot: state.pot,
  name: state.name,
  names: state.names,
  snackbarIsOpen: state.snackbarIsOpen,
  mode: state.mode,
  whoDidIt: state.whoDidIt
});

export default connect(mapStateToProps)(App);
