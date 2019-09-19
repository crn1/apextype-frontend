import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import axios from 'axios';
axios.defaults.withCredentials = true;

const greetingMessage =
`                        _
                       | |
   __ _ _ __   _____  _| |_ _   _ _ __   ___
  / _\` | \'_ \\ / _ \\ \\/ / __| | | | \'_ \\ / _ \\
 | (_| | |_) |  __/>  <| |_| |_| | |_) |  __/_
  \\\__,_| .__/ \\___/_/\\_\\\\__|\\__, | .__/ \\___(_)
       | |                   __/ | |
       |_|                  |___/|_|

    Made by Đorđe Gluvajić (github.com/crn1)

`;

console.log(greetingMessage);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

