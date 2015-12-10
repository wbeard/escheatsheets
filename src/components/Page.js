import _ from 'lodash';
import React, { Component, PropTypes } from 'react';

import Category from './Category';
import Feature from './Feature';
import TextSearch from './TextSearch';

import { categories } from '../data';

export default class Page extends Component {
  render() {
    return (
      <div className="container">
        <h1>es cheatsheets</h1>
        <TextSearch value={ this.props.filterText } onTextChange={ this.props.onTextChange } />
        { this._renderCategories() }
        { this._renderFeatures() }
      </div>
    );
  }

  _renderCategories() {
    return categories.map((categoryProps) => {
      const props = {
        isChecked: this.props.categoryFilters.indexOf(categoryProps.get('value')) > -1,
        key: _.uniqueId(),
        onCheckboxChange: this.props.onCheckboxChange,
        ...categoryProps.toJS()
      }

      return <Category { ...props } />;
    });
  }

  _renderFeatures() {
    return this.props.features.map((featureProps) => {
      featureProps = featureProps.set('tag',
        categories.find((category) => {
          return category.get('value') === featureProps.get('tag');
        }).get('text')
      )
      return <Feature key={ _.uniqueId() } { ...featureProps.toJS() } />;
    });
  }
}
