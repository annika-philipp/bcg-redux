import React from 'react'
import { shallow, mount } from 'enzyme'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import {Welcome} from '../../../client/components/Welcome.jsx' 
//need to write {} to get the unconnected (specific) version of Welcome
//import Welcome would be the connected default export of Welcome.jsx
import './setup-dom'

// import {Provider} from 'react-redux'

import configureStore from  'redux-mock-store'

const mockStore = configureStore([])
//creates a fake store, with no configuartion
//required as react Welcome expects a dispatch
//making sure that dispatch works is part of React's work - interpreting it Redux job and tested there

jest.mock('../../../client/actions/navigate.js', () => ({
  navigate: () => ({
    type: 'FAKE_NAVIGATE'
  })
}))

test('Welcome.jsx React', () => {
  const store = mockStore() //instantiates store for test
  
  const wrapper = shallow(<Welcome
    dispatch={store.dispatch}
  />)

  expect(wrapper.find('button').text()).toBe('Start Game')

  wrapper.find('button').simulate('click')
  expect(store.getActions()).toHaveLength(1)
  expect(store.getActions()[0]).toEqual({
    type: 'FAKE_NAVIGATE'
  })
})

test('Text renders on Welcome', () => {
  const wrapper = shallow(<Welcome />)
  expect(wrapper.find('h3').text()).toBe ('6 weeks of EDA Bootcamp fun starts here ...')
})

