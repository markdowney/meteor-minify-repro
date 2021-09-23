import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { MyComponent } from 'mypackage/index.js';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <MyComponent />
    <Hello/>
    <Info/>
  </div>
);
