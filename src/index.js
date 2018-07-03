import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CustomAvatarGenerator from './CustomAvatarGenerator';

ReactDOM.render(<CustomAvatarGenerator />, document.getElementById('root'));
registerServiceWorker();
