// Your job:
// Test the case where the items provided is empty:
//   <ItemList items={[]} />
// Test the case where there are items in the list:
//   <ItemList items={['apple', 'orange', 'pear']} />
//
// Don't overthink it. This is just a practice run to warm you up
// to testing react components.

// So you can use JSX (which transpiles down to React.createElement):
import React from 'react'
//
// So you can render the component for testing:
import ReactDOM from 'react-dom'
//
// So you can create a react element for the component you're testing:
import ItemList from '../item-list'

test('renders no items when no items are provided', () => {
  //ME:code for the test:
  //1.arrange
  //create a container to render to
  const container = document.createElement('div');
  ReactDOM.render(<ItemList items={[]}/>, container)
  // console.log(container.innerHTML) //ME:"no items" in terminal, this is why we do this:

  //ME:2.act:
  //3.assert:
  // expect(container.innerHTML).toBe('no items');
  //ME:We would not write a test like that. Why? What if I put this string inside an element in my component? ---> The test will breack
  //instead we will do thsi:
  expect(container.textContent).toMatch('no items');
  //ME:now you can put it in whatever tag you want
})

//ME: It is not high fidelity test: you can change the order of the list items; ul an li could be actually important. You should only test things that are really important
test('renders the given items',  () => {
  const container = document.createElement('div');
  ReactDOM.render(<ItemList items={[['apple', 'orange', 'pear']]}/>, container)
  expect(container.textContent).toMatch('apple');
  expect(container.textContent).toMatch('orange');
  expect(container.textContent).toMatch('pear');
})

// and here's an outline example of your first test:
//   Create a "container" to render your component into (tip: use document.createElement('div'))
//
//   Render your component (tip: use ReactDOM.render(JSX, container))
//
//   Make your assertion(s) on the textContent of the container
//   (tip: expect's toMatch function might be what you want
//   for example: `expect('some text content').toMatch('text')`)
//
// For your second test, it will be very similar to the first.

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=basic%20react%20test&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
