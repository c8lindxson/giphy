import '../assets/stylesheets/application.scss';
import React, { Component } from 'react';
import { createRoot } from 'react-dom';
import App from './components/app';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(<App />);
}
