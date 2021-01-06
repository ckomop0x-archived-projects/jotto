import React from 'react';
import Enzyme, {shallow} from 'enzyme';

import findByTestAttr from "../../utils/test/findByTestAttr";
import Congrats from "./Congrats";

/**
 * Factory function to create ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props}/>);
}

describe('Congrats', () => {
  it('Should render without an error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats')

    expect(component.length).toBe(1);
  });

  it('Should render no text when `success` prop is false', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats')

    expect(component.text()).toBe('');
  });

  it('Should render non-empty Congrats message when `success` prop is true', () => {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'congrats-message')

    expect(message.text()).not.toBe(0);
  });
});
