import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import GlobalStyle from "./global";
import Body from "./components/Body";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <GlobalStyle/>
    <Header/>
      <Body/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
