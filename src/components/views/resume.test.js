import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Resume from './resume';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter initialEntries={[ '/resume' ]}><Resume /></MemoryRouter>, div);
});
