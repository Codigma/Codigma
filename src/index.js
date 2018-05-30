//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//Assets
import './index.css';

import registerServiceWorker from './registerServiceWorker';

//Components
import App from './App';

//Routes
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
