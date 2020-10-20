import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';

import {SignUpPage} from './components/SignUpPage'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <div>
      <Route path = '/SignUpPage'>
        <SignUpPage />
      </Route>
      <Route path = '/LoginPage'>
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;
