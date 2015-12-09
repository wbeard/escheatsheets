import expect from 'expect.js';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';

import Page from '../Page';

const shallowRenderer = createRenderer();

describe('Page', () => {
  it('renders a div', () => {
    shallowRenderer.render(<Page />);
    expect(shallowRenderer.getRenderOutput().type).to.be('div');
  });
});
