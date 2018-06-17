import React from 'react'
import { shallow, mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import {AddScore} from '../../../client/components/AddScore' 
import ScoreBoard from '../../../client/components/Scoreboard'
import './setup-dom'

// lines still to test: 25,26,30,31,70 - require react/redux connected test

test('Test Suite Working', () => {
  expect(true).toBe(true)
})

test('Text renders on AddScore', () => {
  const score = {
    totalScore: 100,
    topScores: [150, 120]
  }
  const wrapper = shallow(<AddScore score={score} />)
  expect(wrapper.find('h3').first().text()).toBe('Well done!')
})

test('totalScore gets displayed on AddScore', () => {
  const score = {
    totalScore: 100,
    topScores: [150, 120]
  }
  const wrapper = shallow(<AddScore score={score} />)
  expect(wrapper.find('p').text()).toBe('Your totalscore is: 100')

})

test('initial state returns correctly', () => {
  const score = {
    totalScore: 100,
    topScores: [150, 120]
  }

  const expected = {
    name: '',
    score: 100
  }
  
  const wrapper = shallow(<AddScore score={score} />)
  const actual = wrapper.instance().state
    expect(actual).toEqual(expected)
})

test('handleChange adds to state', () => {
  const score = {
    totalScore: 100,
    topScores: [150, 120]
  }

  const initialState = {
    name: ''
  }
  const testEvent = {
    target: {
      name: 'name',
      value: 'Ben'
    }
  }
  const expected = {
    name: testEvent.target.value
  }

  const wrapper = shallow(<AddScore score={score}/>)
  wrapper.instance().render = () => <div></div>
  wrapper.instance().state = initialState
  wrapper.instance().handleChange(testEvent)

  const actual = wrapper.instance().state
  expect(actual).toEqual(expected)
})

test('render <ScoreBoard /> component', () => {
  const score = {
    totalScore: 100,
    topScores: [150, 120]
  }
  const wrapper = shallow(<AddScore score={score} />)
  expect(wrapper.find(ScoreBoard)).toHaveLength(1)
})