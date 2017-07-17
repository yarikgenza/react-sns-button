import IconGoogle from 'binary-ui-icons/binary/Google';
import IconFacebook from 'binary-ui-icons/binary/Facebook';
import IconLinkedin from 'binary-ui-icons/binary/Linkedin';
import React from 'react';
import infoAddon from '@storybook/addon-info';
import { storiesOf, setAddon } from '@storybook/react';
import ReactSNSButton from 'react-sns-button';
import ReactSNSButtonLabel from 'react-sns-button/Label';

setAddon(infoAddon);

storiesOf('Buttons', module)
  .addWithInfo('facebook', () => (
    <ReactSNSButton
      styleBackgroundColor="#4267b2"
      label="Facebook"
      renderIcon={() => <IconFacebook />}
      onClick={() => { console.log('Facebook'); }}
    />
  ))
  .addWithInfo('google', () => (
    <ReactSNSButton
      styleBackgroundColor="#F4511E"
      label="Google"
      renderIcon={() => <IconGoogle />}
      onClick={() => { console.log('Google'); }}
    />
  ))
  .addWithInfo('linkedin', () => (
    <ReactSNSButton
      styleBackgroundColor="#1278B3"
      label="Linkedin"
      renderIcon={() => <IconLinkedin />}
    />
  ));

storiesOf('Buttons Label', module)
  .addWithInfo('black', () => (
    <ReactSNSButtonLabel styleColor="black" >Default</ReactSNSButtonLabel>
  ));
