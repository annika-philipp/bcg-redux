import React from 'react'
import { shallow, mount } from 'enzyme'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Welcome from '../../../client/components/Welcome.jsx'
import './setup-dom'

test('Text renders on Welcome', () => {
  const wrapper = shallow(<Welcome />)
  expect(wrapper.find('h3').text()).toBe ('6 weeks of EDA Bootcamp fun starts here ...')
})

//add more tests tomorrow