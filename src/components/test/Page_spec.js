import expect from 'expect.js';
import React from 'react';
import { List } from 'immutable';
import { createRenderer } from 'react-addons-test-utils';

import Page from '../Page';

const shallowRenderer = createRenderer();

describe('Page', () => {
  it('renders a div', () => {
    shallowRenderer.render(<Page categoryFilters={ List() } features={ List() } />);
    expect(shallowRenderer.getRenderOutput().type).to.be('div');
  });
});
