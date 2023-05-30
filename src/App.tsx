import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Forums from '.';
import './style.css';

const root = createRoot(document.getElementById('sample'));
root.render(<Forums />);