import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('NavBar renders 3 links', () => {

    let wrapper = render(<NavBar/>);
    expect(wrapper.find('.navbar').length).toEqual(1);
});