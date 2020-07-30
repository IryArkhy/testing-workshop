import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

// Basic unit test
test('calls onSubmit with the username and password when submitted', () => {
  // Arrange
  // create a fake object to hold the form field values (username and password)
  const container = document.createElement('div')
  // create a jest.fn() for your submit handler
  const onSubmitHandler = jest.fn()
  // render the Login component to a div
  ReactDOM.render(<Login onSubmit={onSubmitHandler} />, container)
  // TIP: const div = document.createElement('div')
  //
  // get the field nodes
  // TIP: const inputs = div.querySelectorAll('input')
  // eslint-disable-next-line no-unused-vars
  const inputs = container.querySelectorAll('input')
  // TIP: const form = div.querySelector('form')
  const form = container.querySelector('form')
  // fill in the field values
  // const {0: inputOne, 1: inputTwo} = inputs;
  // inputOne.value = 'userName';
  // inputTwo.value = 'userPassword'
  // ----2 --- works tooo
  const {username, password} = form.elements
  username.value = 'userName'
  password.value = 'userPassword'
  // Act
  // submit the form:
  // TIP: formNode.dispatchEvent(new window.Event('submit'))
  form.dispatchEvent(new window.Event('submit'))
  //
  // Assert
  // ensure your submit handler was called properly
  expect(onSubmitHandler).toHaveBeenCalledTimes(1)
  expect(onSubmitHandler).toHaveBeenCalledWith({
    username: username.value,
    password: password.value,
  })
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=37odri@gmail.com
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
