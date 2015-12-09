import React, { Component, PropTypes } from 'react';

export default class TextSearch extends Component {
  static propTypes = {
    onTextChange: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  render() {
    return (
      <input placeholder="Filter by name" className="input-lg form-control" value={ this.props.value } type="text" onChange={ this._onChange.bind(this) } />
    );
  }

  _onChange(e) {
    this.props.onTextChange(e.currentTarget.value);
  }
}
