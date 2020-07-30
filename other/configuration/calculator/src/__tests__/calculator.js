import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from '../calculator'

//sort of an integration test because the calculator is sort of the whole app

test('mounts', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Calculator />, div)
})
