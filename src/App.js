import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './styles/global.scss';

export default function App() {
  return(
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}
