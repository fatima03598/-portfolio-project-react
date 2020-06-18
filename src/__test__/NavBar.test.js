import React from 'react';
import { render } from '@testing-library/react';
import Enzyme,  { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from '../components/NavBar';


Enzyme.configure({ adapter: new Adapter() })


describe('<NavBar />', () => {
   

    it('should render `.navbar` class ', () => {
        const wrapper = shallow(<NavBar />); 
        expect(wrapper.find('.navbar')).toHaveLength(1);
    });
    
    it('should render three `Links` tags', () => {
        const wrapper = shallow(<NavBar />); 
        expect(wrapper.find('.styledLink')).toHaveLength(3);
    })

    it('should have a link to home with the handlescroll prop', () => {
        const wrapper = mount(<NavBar onClick="handleScroll" />); 
        expect(wrapper.find('.styledLink').first().props().onClick).toEqual('handleScroll');
       
    } )

  })

