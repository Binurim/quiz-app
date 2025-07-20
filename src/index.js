import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz';
import './index.css';
import questionsData from './data';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Quiz questionsData={questionsData}/>
  </React.StrictMode>
);

