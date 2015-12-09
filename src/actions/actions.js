export const Filters = {
  ADD_FILTER: 'ADD_FILTER',
  FILTER_BY_TEXT: 'FILTER_BY_TEXT',
  REMOVE_FILTER: 'REMOVE_FILTER'
}

export function addFilter(filter) {
  return { type: Filters.ADD_FILTER, filter };
}

export function filterByText(text) {
  return { type: Filters.FILTER_BY_TEXT, text };
}

export function removeFilter(filter) {
  return { type: Filters.REMOVE_FILTER, filter};
}
