import React, { Component, PropTypes } from 'react';

export default class TextSearch extends Component {
  static propTypes = {
    onTextChange: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  render() {
    const inputProps = {
      autoFocus: true,
      className: 'input-lg form-control',
      onChange: this._onChange.bind(this),
      placeholder: 'Filter by name',
      type: 'text',
      value: this.props.value
    }
    return (
      <input { ...inputProps } />
    );
  }

  _onChange(e) {
    this.props.onTextChange(e.currentTarget.value);
  }
}
