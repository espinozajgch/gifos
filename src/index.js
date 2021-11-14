import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import FetchContext from './context/fetchContext'

ReactDOM.render(
  <FetchContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FetchContext>,
  document.getElementById('root')
);
