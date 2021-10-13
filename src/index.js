import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StartSite from './Modules/JS/StartSite.js';
import ProjectList from './Modules/JS/ProjectList.js';
import MyFooter from './Modules/JS/MyFooter.js';

ReactDOM.render(
  <>
  
  <StartSite />
  <ProjectList />
  <MyFooter />
  </>,
  document.getElementById('root')
);