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
`// Check if an element is in the array.
const arr = [1, 2, 3];
const elem = 1;

if (arr.includes(elem)) {
  console.log('Array includes this element');
}

// -> 'Array includes this element';
`
    ]
  },
  {
    title: 'Exponentiation Operator',
    docLink: 'https://github.com/rwaldron/exponentiation-operator',
    tag: 3,
    examples: [
`//Squared
let squared = 2 ** 2;
console.log(squared);
// -> 4

//Cubed
let cubed = 2 ** 3;
console.log(cubed);
// -> 8
`
    ]
  },
  {
    title: 'Class Fields & Static Properties',
    docLink: 'https://github.com/jeffmo/es-class-fields-and-static-properties',
    tag: 1,
    examples: [
`//Instance properties
class MyClass {
  myProp = 42;
}

const myClass = new MyClass();
console.log(myClass.myProp);
// -> 42
`,
`//Static properties
class MyClass {
  static myProp = 42;
}

console.log(MyClass.myProp);
// -> 42
`
    ]
  },
  {
    title: 'Arrow Functions',
    tag: 2015,
    docLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
    examples: [
`//Implicit return
const meaningOfEverything = () => 42;

console.log(meaningOfEverything());
// -> 42
`,
`// Explicit return
const meaningOfEverything = () => {
  return 42;
}

console.log(meaningOfEverything());
// -> 42
`
    ]
  },
  {
    title: 'Destructuring',
    tag: 2015,
    docLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment',
    examples: [
`//Arrays
const arr = [1, 2, 3];
const [first, second, third] = arr;
console.log(first, second, third);
// -> 1, 2, 3

//Objects
const obj = {a: 1, b:2}
const { a, b } = obj;
console.log(a, b);
// -> 1, 2

//Named deconstructed variables
const { a: foo, b: bar } = obj;
console.log(foo, bar);
// -> 1, 2
`
    ]
  },
  {
    title: 'Async Functions & Await',
    tag: 3,
    docLink: 'https://github.com/tc39/ecmascript-asyncawait',
    examples: [
`
async function getCollaboratorImages(full_name) {
  var url = 'https://api.github.com/repos/' + full_name + '/collaborators';
  var res = await request({url: url, headers: headers});

  return JSON.parse(res.body).map(function(collab) {
      return collab.avatar_url;
  });
}

const images = await getCollaboratorImages('wbeard/escheatsheets');

console.log(images.length);

// -> 1
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
