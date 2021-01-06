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

    expect(wrapper).toBeTruthy;
  });

  it('Should render no text when `success` prop is false', () => {

  });

  it('Should render non-empty Congrats message when `success` prop is true', () => {

  });
});
