import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/index.scss";
import { setToLS } from './utils/storage';


const Index = () => {
    setToLS('defaultTheme', {bgColor: "#FFFFFF"});
    return(
        <App />
    )
}
ReactDOM.render(
    <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
