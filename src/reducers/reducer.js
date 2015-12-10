import Immutable, { fromJS } from 'immutable';

import { Filters } from '../actions/actions';

import { features } from '../data';

const initialState = fromJS({
  categoryFilters: [],
  filterText: '',
  features: features
});

export default function app(state = initialState, action = {}) {
  switch(action.type) {
    case Filters.ADD_FILTER:
      return state.set('categoryFilters', state.get('categoryFilters').push(action.filter));
    case Filters.REMOVE_FILTER:
      const index = state.get('categoryFilters').indexOf(action.filter);
      return state.set('categoryFilters', state.get('categoryFilters').delete(index));
    case Filters.FILTER_BY_TEXT:
      return state.set('filterText', action.text);
    default:
      return state;
  }
}
