import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import InputText from '../InputText/InputText';

import { regExpSet, regMatchPattern } from '../../actions/regExp';
import './RegExpInput.scss';
import KEYS from '../../consts/keys';
import classNames from 'classnames';

class RegExpInput extends PureComponent {
  onChange = (value) => {
    this.props.regExpSet(value);
  }

  onEnter = (value) => {
    this.onChange(value);
    this.props.regMatchPattern();
  }

  onClear = () => {
    this.props.regExpSet('');
  }

  render() {
    const { regExp: { pattern, error } } = this.props;
    return (
      <div className="input-regexp">
        <div className="input-regexp__message-block">
          <div className={classNames('input-regexp__message', { 'input-regexp__message--show': error })}>
            Wrong RegExp!
          </div>
        </div>
        <div className="input-regexp__input-block">
          <InputText
            className={classNames('input-regexp__input', { 'input-regexp__input--error': error })}
            initValue={pattern}
            onChange={this.onChange}
            onEnter={this.onEnter}
          />
          <button
            className="input-regexp__button"
            onClick={this.onClear}
          >
            clear
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    regExp: state.regExp,
  };
};

const mapActionToProps = {
  regExpSet,
  regMatchPattern,
};


export default connect(mapStateToProps, mapActionToProps)(RegExpInput);
