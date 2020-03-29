import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

/** 将 http 全局挂载到组件到this 上 */
// import * as  services from './services';
// React.Component.prototype.http = services;

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);