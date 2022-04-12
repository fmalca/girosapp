import React from 'react';
import * as ReactDomClient from 'react-dom/client'
import GirosApp from './GirosApp';

const container = document.getElementById('root');
const root = ReactDomClient.createRoot(container);
root.render(<GirosApp />);

