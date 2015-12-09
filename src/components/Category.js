import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

export default class Feature extends Component {
  static propTypes = {
    isChecked: PropTypes.bool,
    onCheckboxChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }

  defaultProps = {
    isChecked: false
  }

  render() {
    const styles = {
      backgroundColor: '#f1c40f',
      display: 'inline-block',
      marginRight: '0.5rem',
      padding: '0.75rem'
    };

    return (
      <div className="checkbox" style={ styles }>
        <label>
          <input checked={ this.props.isChecked } type="checkbox" onChange={ this._onChange.bind(this) } />
          { this.props.text }
        </label>
      </div>
    );
  }

  _onChange(e) {
    this.props.onCheckboxChange(this.props.value, e.target.checked);
  }
}
