import React from 'react'
import { shallow, mount } from 'enzyme'
//shallow - unit testing this particular file and what it does

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import {App} from '../../../client/components/App.jsx' 
//need to write {} to get the unconnected (specific) version of App
//import App would be the connected default export of App.jsx
import './setup-dom'


const wrapper = shallow(<App />)


test('renders the React component', () => {
    expect(wrapper.length).toEqual(1)
 })

test('Text renders on App', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toBe ('BCG 3000')
  })

//INIT
test('Test Suite Working', () => {
    expect(true).toBe(true)
})
