import IconGoogle from 'binary-ui-icons/binary/Google';
import IconFacebook from 'binary-ui-icons/binary/Facebook';
import IconLinkedin from 'binary-ui-icons/binary/Linkedin';
import React from 'react';
import infoAddon from '@kadira/react-storybook-addon-info';
import { storiesOf, setAddon } from '@kadira/storybook';
import ReactSNSButton from 'react-sns-button';
import ReactSNSButtonLabel from 'react-sns-button/Label';

setAddon(infoAddon);

storiesOf('Buttons', module)
  .addWithInfo('facebook', () => (
    <ReactSNSButton
      label="Facebook"
      style={{ backgroundColor: '#4267b2' }}
      renderIcon={() => <IconFacebook />}
      onClick={() => { console.log('Facebook'); }}
    />
  ))
  .addWithInfo('google', () => (
    <ReactSNSButton
      label="Google"
      style={{ backgroundColor: '#F4511E' }}
      renderIcon={() => <IconGoogle />}
      onClick={() => { console.log('Google'); }}
    />
  ))
  .addWithInfo('Linkedin', () => (
    <ReactSNSButton
      label="Linkedin"
      style={{ backgroundColor: '#1278B3' }}
      renderIcon={() => <IconLinkedin />}
    />
  ));

storiesOf('Buttons Label', module)
  .addWithInfo('black', () => (
    <ReactSNSButtonLabel styleColor="black" >Default</ReactSNSButtonLabel>
  ));
