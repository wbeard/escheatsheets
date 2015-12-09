import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

export default class Feature extends Component {
  static propTypes = {
    docLink: PropTypes.string.isRequired,
    examples: PropTypes.array.isRequired,
    isDeprecated: PropTypes.bool,
    stage: PropTypes.number,
    title: PropTypes.string.isRequired,
    version: PropTypes.string
  }

  defaultProps = {
    isDeprecated: false
  }

  render() {
    const headStyles = {
      marginBottom: '5px'
    };

    const subHeadStyles = {
      color: '#95a5a6',
      fontSize: '1.75rem',
      marginTop: '0'
    };

    const linkStyles = {
      display: 'block',
      textAlign: 'right'
    }

    return (
      <div>
        <h2 style={ headStyles }>{ this.props.title }</h2>
        <h3 style={ subHeadStyles }>{ this.props.tag }</h3>
        <h4>{ this.props.isDeprecated ? 'Deprecated' : '' }</h4>
        <div>
          {
            this.props.examples.map(example =>
              <pre key={ _.uniqueId() }>
                { example }
              </pre>
            )
          }
        </div>
        <a style={ linkStyles } href={ this.props.docLink }>Docs</a>
      </div>
    );
  }
}
