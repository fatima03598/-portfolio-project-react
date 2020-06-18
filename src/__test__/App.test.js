import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import NavBar from '../components/NavBar';
import Enzyme, { configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })

describe('<App />', () => {

  it('should render one `navBar` ', () => {
      const wrapper = shallow(<App />); 
      expect(wrapper.find('NavBar')).toHaveLength(1);
  } )


 
})