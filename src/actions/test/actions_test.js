import expect from 'expect.js';

import { Filters, addFilter, filterByText, removeFilter } from '../actions';

const mockFilter = "Foo";
const mockText = "Bar";

describe('actions', () => {
  it('has the correct filters', () => {
    expect(Filters).to.eql({
      ADD_FILTER: 'ADD_FILTER',
      FILTER_BY_TEXT: 'FILTER_BY_TEXT',
      REMOVE_FILTER: 'REMOVE_FILTER'
    });
  });

  describe('#addFilter', () => {
    let action;

    beforeEach(() => {
      action = addFilter(mockFilter);
    });

    it('returns a type of ADD_FILTER', () => {
      expect(action.type).to.be(Filters.ADD_FILTER);
    });

    it('passes through the filter it receives', () => {
      expect(action.filter).to.be(mockFilter);
    });
  });

  describe('#filterByText', () => {
    let action;

    beforeEach(() => {
      action = filterByText(mockText);
    });

    it('returns a type of FILTER_BY_TEXT', () => {
      expect(action.type).to.be(Filters.FILTER_BY_TEXT);
    });

    it('passes through the text it receives', () => {
      expect(action.text).to.be(mockText);
    });
  });

  describe('#removeFilter', () => {
    let action;

    beforeEach(() => {
      action = removeFilter(mockFilter);
    });

    it('returns a type of REMOVE_FILTER', () => {
      expect(action.type).to.be(Filters.REMOVE_FILTER);
    });
    it('passes through the filter it recieves', () => {
      expect(action.filter).to.be(mockFilter);
    });
  });
});
