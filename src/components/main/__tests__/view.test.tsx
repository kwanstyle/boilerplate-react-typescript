import React from 'react';
import { shallow } from 'enzyme';
import View from '../view';

describe('View component', () => {
    it('should render correct text', () => {
        const wrapper = shallow(<View></View>);
        expect(wrapper.text()).toBe('Hello World');
    });
});
