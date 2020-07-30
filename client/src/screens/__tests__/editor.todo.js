import React from 'react'
import ReactDOM from 'react-dom'
import * as utilsMock from '../../utils/api'
import Editor from '../editor.todo'

//mock api calls
jest.mock('../../utils/api', () => {
  return {
    posts: {
      create: jest.fn(() => Promise.resolve()),
    },
  }
})
// in the file of a component: api.posts.create(newPost).then().... is async code. We neew to mock async funcs and wait till it's executed in our test

//This thing will wait untill the next tick of the event loop before it is resolved
const flushPromises = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}
test('calls onSubmit with the username and password when submitted', async () => {
  // Arrange
  // create a fake user, post, history, and api
  const fakeUser = {id: 'foobar'}
  //mock history from ReactRouter -> something that resembles the same API
  const fakeHistory = {
    push: jest.fn(),
  }
  // use ReactDOM.render() to render the editor to a div
  const container = document.createElement('div')
  ReactDOM.render(<Editor user={fakeUser} history={fakeHistory} />, container)
  const form = container.querySelector('form')
  // console.log(form.elements.title); //gives an HTML element

  // fill out form elements with your fake post
  const {title, content, tags} = form.elements
  title.value = 'I like twix'
  content.value = 'Like a lot...Sorta'
  tags.value = 'twix,   my    ,likes'
  // Act
  // submit form
  //fire a submit event on the form
  const submit = new window.Event('submit')
  form.dispatchEvent(submit)
  // wait for promise to settle
  await flushPromises()
  // Assert
  // ensure the create function was called with the right data

  expect(fakeHistory.push).toHaveBeenCalledTimes(1)
  expect(fakeHistory.push).toHaveBeenCalledWith('/')
  expect(utilsMock.posts.create).toHaveBeenCalledTimes(1)
  expect(utilsMock.posts.create).toHaveBeenCalledWith({
    authorId: fakeUser.id,
    title: title.value,
    content: content.value,
    tags: ['twix', 'my', 'likes'],
    //we could, but we also could be more specific
    date: expect.any(String),
  })

  //more specific solution for date see at editor.js file
})

// TODO later...
test('snapshot', () => {})
