import React from 'react'
import { shallow, mount } from 'enzyme'
//shallow - unit testing this particular file and what it does

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

import {AddScore} from '../../../client/components/AddScore.jsx'
import './setup-dom'

import configureStore from  'redux-mock-store'

const mockStore = configureStore([])
// //creates a fake store, with no configuartion
// //required as react Welcome expects a dispatch
// //making sure that dispatch works is part of React's work - interpreting it Redux job and tested there

// jest.mock('../../../client/actions/navigate.js', () => ({
//   navigate: () => ({
//     type: 'FAKE_NAVIGATE'
//   })
// }))

// test('AddScore.jsx React', () => {
//   const store = mockStore() //instantiates store for test

//   const wrapper = shallow(<AddScore
//     dispatch={store.dispatch}
//   />)

//   expect(wrapper.find('button').text()).toBe('Start Game')

//   wrapper.find('button').simulate('click')
//   expect(store.getActions()).toHaveLength(1)
//   //store.getActions() function is part of mockStore()
//   expect(store.getActions()[0]).toEqual({
//     type: 'FAKE_NAVIGATE'
//   })
//   //tests dispatch click event
// })

test('Test Suite Working', () => {
    expect(true).toBe(true)
})

test('Text renders on AddScore', () => {
    const totalScore = 100
    const score = {
      totalScore,
      topScores: [
        100
      ]
    }

    const wrapper = shallow(<AddScore score={score}/>)
    expect(wrapper.find('h3').first().text()).toBe ('Well done!')
    expect(wrapper.find('h3').last().text()).toBe ('Deploy yourself into phase 3')
})
