import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MainContent from './components/MainContent/containers/MainContent';
import Header from './components/Header';
import Footer from './components/Footer/containers/Footer';

describe('App component', () => {
  it('should shallow correctly', () => {
    const appComponent = shallow(<App/>);
    expect(appComponent).toMatchSnapshot();
    expect(appComponent.find(Header).length).toEqual(1);
    expect(appComponent.find(MainContent).length).toEqual(1);
    expect(appComponent.find(Footer).length).toEqual(1);
  });
});
