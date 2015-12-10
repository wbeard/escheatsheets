import { expect } from 'chai';
import Immutable, { fromJS, List, Map } from 'immutable';

import reducer from '../reducer';
import { Filters } from '../../actions/actions';

const mockInitialState = fromJS({
  categoryFilters: [],
  filterText: '',
  features: []
});

const mockFilter = 'filter';
const mockText = 'foo';

describe('reducer', () => {
  let state;

  describe('default', () => {
    beforeEach(() => {
      state = reducer();
    });

    it('has the correct default state', () => {
      expect(state.get('categoryFilters')).not.to.be.undefined;
      expect(state.get('filterText')).not.to.be.undefined;
      expect(state.get('features')).not.to.be.undefined;
    });
  });

  describe('add filter', () => {
    beforeEach(() => {
      state = reducer(mockInitialState, { type: Filters.ADD_FILTER, filter: mockFilter });
    });

    it('adds a filter to the state', () => {
      expect(state.getIn(['categoryFilters', 0])).to.equal(mockFilter);
    });
  });

  describe('remove filter', () => {
    beforeEach(() => {
      state = reducer(mockInitialState, { type: Filters.ADD_FILTER, filter: mockFilter });
      state = reducer(state, { type: Filters.REMOVE_FILTER, filter: mockFilter })
    });

    it('adds a filter to the state', () => {
      expect(state.getIn(['categoryFilters', 0])).to.be.undefined;
    });
  });

  describe('filter by text', () => {
    beforeEach(() => {
      state = reducer();
      state = reducer(state, { type: Filters.FILTER_BY_TEXT, text: mockText });
    });

    it('adds the text to the state', () => {
      expect(state.get('filterText')).to.equal(mockText);
    });
  });
});
