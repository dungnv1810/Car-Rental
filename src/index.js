import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'aos/dist/aos.css'
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>
);
