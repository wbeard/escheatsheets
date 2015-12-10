import { fromJS } from 'immutable';

export const features = [
  {
    docLink: 'http://mozilla.com/mdn',
    examples: [
      'function(firstArg, ...rest)',
      '{ ...props }',
      '[arrayElements, ...moreElements]'
    ],
    tag: 3,
    title: 'Spread operator'
  },
  {
    title: 'Array.prototype.includes',
    docLink: 'https://github.com/tc39/Array.prototype.includes/',
    tag: 4,
    examples: [
      'if (arr.includes(el)) {\
          ...\
      }'
    ]
  },
  {
    title: 'Exponentiation Operator',
    dockLink: 'https://github.com/rwaldron/exponentiation-operator',
    tag: 3,
    examples: [
      'let cubed = 2 ** 3;'
    ]
  }
];

export const categories = fromJS([
  {
    text: 'Stage 0',
    value: 0
  },
  {
    text: 'Stage 1',
    value: 1
  },
  {
    text: 'Stage 2',
    value: 2
  },
  {
    text: 'Stage 3',
    value: 3
  },
  {
    text: 'Stage 4',
    value: 4
  },
  {
    text: 'ES2015',
    value: 2015
  }
]);
