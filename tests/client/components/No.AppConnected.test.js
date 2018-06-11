// *** leave this in here for now, I am currently looking into how to test the react/redux connected component ***

// import React from 'react'
// import { shallow, mount } from 'enzyme'

// import Enzyme from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

// Enzyme.configure({ adapter: new Adapter() })

// import App from '../../../client/components/App.jsx' 
// import Welcome from '../../../client/components/Welcome.jsx' 
// import './setup-dom'

// import {Provider} from 'react-redux'
// // //for connect to work it needs a Provider, so for testing we're giving it our mockStore

// import configureStore from  'redux-mock-store'

// const mockStore = configureStore([])
// const store = mockStore() //instantiates store for test

// // nope, not working
// // describe('<App />', () => {

// //   it('should render one <Welcome /> component', () => {
// //     const wrapper = shallow(<App store={store}/>)
// //     expect(wrapper.find(Welcome)).toHaveLength(1)
// //   })
// // })

// describe('<App />', () => {
//     const location = 'welcome'
//     it('allows us to set props', () => {
//         const wrapper = shallow(
//             <Provider store={store}>
//             <App
//             location={location}
//             />
//             </Provider>
//             )
//     //   const wrapper = mount(<App store={store} location="welcome" />);
//       expect(wrapper.props().location).toEqual('welcome')
//       wrapper.setProps({ location: 'scoreboard' })
//       expect(wrapper.props().location).toEqual('scoreboard')
//     })
// })