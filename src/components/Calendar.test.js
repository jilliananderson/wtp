import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './Calendar';

describe('Calendar component tests', () => {
let wrapper;
beforeEach(() => wrapper = shallow(<Calendar />));

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});