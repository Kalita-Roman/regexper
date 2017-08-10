import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import InputText from '../InputText/InputText';

import { textsRemove } from '../../actions/texts';
import './TextItem.scss';

export default class TextItem extends PureComponent {
  onRemove = () => {
    const { onRemove, text: { id } } = this.props;
    onRemove && onRemove(id);
  }

  onChange = (value) => {
    const { onUpdate, text: { id } } = this.props;
    onUpdate && onUpdate(id, value);
  }

  setInput = (input) => {
    this.input = input;
  }

  render() {
    const { text: { value, match } } = this.props;
    return (
      <div className="text">
        <div className={'text__led text__led--' + match} >
        </div>
        <InputText
          className="text__input"
          initValue={value}
          onChange={this.onChange}
        />
        <button
          className="text__button"
          onClick={this.onRemove}
        >
          delete
        </button>
      </div>
    );
  }
}
