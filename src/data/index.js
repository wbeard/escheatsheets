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
`// ES5
var text = "Foo";
if (arr.indexOf(text) > -1) {
  //do stuff
}

// Proposal
if (arr.includes(text)) {
  //do stuff
}
`
    ]
  },
  {
    title: 'Exponentiation Operator',
    docLink: 'https://github.com/rwaldron/exponentiation-operator',
    tag: 3,
    examples: [
      'let cubed = 2 ** 3;'
    ]
  },
  {
    title: 'Class Fields & Static Properties',
    docLink: 'https://github.com/jeffmo/es-class-fields-and-static-properties',
    tag: 1,
    examples: [
`//Instance properties

//ES2015
class MyClass {
  constructor() {
    this.myProp = 42;
    console.log(this.myProp);
  }
}

//Proposal
class MyClass {
  myProp = 42;

  constructor() {
    console.log(this.myProp);
  }
}
`
    ]
  },
  {
    title: 'Arrow Functions',
    tag: 2015,
    docLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
    examples: [
`//ES5
function() {
  return 42;
}.bind(this);

//ES2015
() => 42;
//or
() => {
  return 42;
}
`
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
