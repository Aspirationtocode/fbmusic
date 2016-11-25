import React from 'react';
import { render } from 'react-dom';

import App from './modules/components/App';

render(<App />, document.getElementById('root'))

function onYtEvent(payload) {
  if (payload.eventType == 'subscribe') {
    // Add code to handle subscribe event.
		console.log('someone subbed!=)');
  } else if (payload.eventType == 'unsubscribe') {
    // Add code to handle unsubscribe event.
  }
  if (window.console) { // for debugging only
    window.console.log('YT event: ', payload);
  }
}
