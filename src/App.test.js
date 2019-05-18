import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import List from './components/List';
import Calendar from './components/Calendar';

describe('App tests', () => {
  let wrapper; 
  beforeEach(() => wrapper = shallow(<App />));
  
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a List component', () => {
    expect(wrapper.containsMatchingElement(<List />)).toEqual(true);
  });

  it('renders a Calendar component', () => {
    expect(wrapper.containsMatchingElement(<Calendar />)).toEqual(true);
  });
});
