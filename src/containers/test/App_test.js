import { fromJS, List } from 'immutable';
import React, { Component } from 'react';
import { expect } from 'chai';
import { stub } from 'sinon';

import { mapStateToProps } from '../App';
import { filterByText } from '../../actions/actions';
import reducer from '../../reducers/reducer';

const features = [
  {
    docLink: 'http://mozilla.com/mdn',
    examples: [
      'function(firstArg, ...rest)',
      '{ ...props }',
      '[arrayElements, ...moreElements]' ],
    tag: 3,
    title: 'Spread operator'
  },
  {
    title: 'Array.prototype.includes',
    docLink: 'https://github.com/tc39/Array.prototype.includes/',
    tag: 4,
    examples: [
      'if (arr.includes(el)) {          ...      }'
    ]
  }
];

const initialState = reducer().set('features', fromJS(features));
const initialFeaturesAlphabatized = initialState.get('features').sortBy(feature => feature.get('title'));

describe('App', () => {
  describe('#mapStateToProps', () => {
    describe('when there is no search text', () => {
      describe('and there are no categories', () => {
        it('returns all the features in state', () => {
          const props = mapStateToProps(initialState);

          expect(props.features).to.equal(initialFeaturesAlphabatized);
        });
      });
    });

    describe('when there is search text', () => {
      it('returns features that match', () => {
        const nextState = initialState.set('filterText', 'spr');
        const props = mapStateToProps(nextState);

        expect(props.features).to.equal(fromJS([initialFeaturesAlphabatized.get(1)]));
      });
    });

    describe('when there is a category', () => {
      describe('when no features match the category', () => {
        it('matches no features', () => {
          const nextState = initialState.set('categoryFilters', initialState.get('categoryFilters').push('foo'));
          const props = mapStateToProps(nextState);

          expect(props.features.size).to.equal(0);
        });
      });

      describe('when a feature matches a category', () => {
        it('matches one', () => {
          const nextState = initialState.set('categoryFilters', initialState.get('categoryFilters').push(3));
          const props = mapStateToProps(nextState);

          expect(props.features.size).to.equal(1);
          expect(props.features.getIn([0, 'title'])).to.equal('Spread operator');
        });
      });

      describe('when there are multiple categories that match', () => {
        it('matches multiples', () => {
          const nextState = initialState.set('categoryFilters', initialState.get('categoryFilters').push(3).push(4));
          const props = mapStateToProps(nextState);

          expect(props.features.size).to.equal(2);
          expect(props.features.getIn([0, 'title'])).to.equal('Array.prototype.includes');
          expect(props.features.getIn([1, 'title'])).to.equal('Spread operator');
        });
      });
    });
  });
});
