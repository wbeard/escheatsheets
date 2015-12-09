import React, { Component } from 'react';
import { connect } from 'react-redux';

import Page from '../components/Page';
import { addFilter, removeFilter, filterByText } from '../actions/actions';

export class App extends Component {
  render() {
    const { dispatch, features, filterText, categoryFilters } = this.props;
    const pageProps = {
      features,
      filterText,
      categoryFilters,
      onTextChange: text => dispatch(filterByText(text)),
      onCheckboxChange: (category, add) => {
        if(add) {
          return dispatch(addFilter(category));
        }

        return dispatch(removeFilter(category));
      }
    }

    return (
      <Page { ...pageProps } />
    );
  }
}

function selectFeatures(features, categoryFilters, filterText) {
  return features.filter((feature) => {
    if(!categoryFilters.size) {
      return feature;
    }

    return categoryFilters.indexOf(feature.get('tag')) > -1;
  }).filter((feature) => {
    if(!filterText) {
      return feature;
    }

    return feature.get('title').toLowerCase().includes(filterText);
  }).sortBy(feature => feature.get('title'));
}

export function mapStateToProps(state) {
  return {
    features: selectFeatures(state.get('features'), state.get('categoryFilters'), state.get('filterText')),
    categoryFilters: state.get('categoryFilters'),
    filterText: state.get('filterText')
  };
};

export default connect(mapStateToProps)(App);
