import React, { Component } from 'react';
import KEYS from '../../consts/keys';

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.initValue || '' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.value !== this.state.value
    || nextProps.className !== this.props.className;
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
    const { onChange } = this.props;
    onChange && onChange(value);
  }

  onKeyUp = ({ keyCode, target: { value } }) => {
    if (keyCode === KEYS.ENTER) {
      const { onEnter } = this.props;
      onEnter && onEnter(value);
    }
  }

  setInput = (input) => {
    this.input = input;
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {
    const { className } = this.props;
    const { value } = this.state;
    return (
      <input
        className={className}
        type="text"
        value={value}
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
        ref={this.setInput} 
      />
    );
  }
}
