import React from 'react'
import { shallow, mount } from 'enzyme'
//shallow - unit testing this particular file and what it does

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import Welcome from '../../../client/components/Welcome.jsx' 
//import Welcome is the connected default export of Welcome.jsx as opposed to {Welcome}
import './setup-dom'

import {Provider} from 'react-redux'
//for connect to work it needs a Provider, so for testing we're giving it our mockStore

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

test('Welcome.jsx testing React/Redux connected export', () => {
    const store = mockStore() //instantiates store for test
  
    const wrapper = mount(
        <Provider store={store}>
        <Welcome
        dispatch={store.dispatch}
        />
        </Provider>
        )
  
    expect(wrapper.find('button').text()).toBe('Start Game')
  
    wrapper.find('button').simulate('click')
    expect(store.getActions()).toHaveLength(1)
    //store.getActions() function is part of mockStore()
    expect(store.getActions()[0]).toEqual({
      type: 'FAKE_NAVIGATE'
    })
    //tests dispatch click event
  })