import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import './src/styles/markdown.css';
import './src/styles/style.scss';

import React from 'react';
import Layout from './src/components/Layout';
import App from './src/App';

// eslint-disable-next-line react/display-name
export const wrapRootElement = ({element}) => {
  return <App>{element}</App>;
};

export const wrapPageElement = ({element}) => {
  return <Layout>{element}</Layout>;
};
