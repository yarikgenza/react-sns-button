import IconGoogle from 'binary-ui-icons/binary/Google';
import IconFacebook from 'binary-ui-icons/binary/Facebook';
import IconLinkedin from 'binary-ui-icons/binary/Linkedin';
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ReactSNSButton from 'react-sns-button';

storiesOf('Buttons', module)
  .add('facebook', () => (
    <ReactSNSButton
      label="Facebook"
      style={{ backgroundColor: '#4267b2' }}
      renderIcon={() => <IconFacebook />}
      onClick={() => { console.log('Facebook'); }}
    />
  ))
  .add('google', () => (
    <ReactSNSButton
      label="Google"
      style={{ backgroundColor: '#F4511E' }}
      renderIcon={() => <IconGoogle />}
      onClick={() => { console.log('Google'); }}
    />
  ))
  .add('Linkedin', () => (
    <ReactSNSButton
      label="Linkedin"
      style={{ backgroundColor: '#1278B3' }}
      renderIcon={() => <IconLinkedin />}
    />
  ));
