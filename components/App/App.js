import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';

import Texts from '../Texts/Texts';
import RegExpInput from '../RegExpInput/RegExpInput';

import { textsLoad } from '../../actions/texts';
import { regExpLoad, regMatchPattern } from '../../actions/regExp';

class App extends Component {
  componentWillMount() {
    this.props.textsLoad();
    this.props.regExpLoad();
    this.props.regMatchPattern();
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
        RegExp-er
        </header>
        <div className="app-wrapper">
          <RegExpInput />
          <Texts />
        </div>
        <footer className="app-footer">
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapActionToProps = {
  textsLoad,
  regExpLoad,
  regMatchPattern
};

export default connect(mapStateToProps, mapActionToProps)(App);