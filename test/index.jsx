import IconFacebook from 'binary-ui-icons/binary/Facebook';
import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ReactSNSButton from '../src';

describe('<ReactSNSButton /> shallow rendering', () => {
  it('has 2 children', () => {
    const wrapper = shallow(
      <ReactSNSButton
        label="Facebook"
        style={{ backgroundColor: '#4267b2' }}
        renderIcon={() => <IconFacebook />}
        onClick={() => { console.log('Facebook'); }}
      />,
    );
    expect(wrapper.children()).to.have.length(2);
  });
});
