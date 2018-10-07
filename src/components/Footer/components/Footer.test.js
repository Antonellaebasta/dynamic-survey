import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer, { NavigationButton } from './Footer';

describe('NavigationButton click to update the view', () => {
  function setup(addedProps = {}, render = shallow) {
    const props = {
      currentIndex: 1,
      currentView: 'gender',
      surveyData: {},
      ...addedProps
    };
    return render(<Footer surveyObj={props} />)
  }

  it('should show 2 navigation buttons', () => {
    const renderedComponent = setup();
    expect(renderedComponent.find(NavigationButton).length).toEqual(2);
  });

  it('shouldn\'t show the prev navigation button in the first view', () => {
    const renderedComponent = setup({ currentIndex: 0, currentView: 'age' });
    expect(renderedComponent.find(NavigationButton).length).toEqual(1);
  });

  it('should disable the Next navigation button if the input value is not provided', () => {
    const renderedComponent = setup();
    expect(renderedComponent.find(NavigationButton).at(1).prop('disabled')).toEqual(true);
  });
});
