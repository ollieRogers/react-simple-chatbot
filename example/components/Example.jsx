import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';
import {steps} from './steps';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};


// Outside ChatBot
// ===============
// Update our form data obj on stageSubmit
// Loop through cache to prepop formData.
// Loop through partial app data and ask missing questions.
// Use our form consts to define step names.
// Use mobile number for all number fields.
// Pull in our validation 


// Inside ChatBot
// ==============
// Expose cache to top level 
// Allow custom input 
// Trigger updates on bubble click.
// allow suffixes on questions

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <ChatBot 
      onLoad={(data)=>{console.log('Loaded: ', data)}}
      onChange={(data)=>{console.log('Changed: ', data)}}
      placeholder="xxx"
      inputAttributes={{
        type: 'text'
      }}
      steps={steps} 
      // cache={true}
    />
  </ThemeProvider>
);

export default ThemedExample;
