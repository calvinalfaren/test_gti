import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './template/navbar';
import CountOrder from './pages/count-order';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<App />} />
        {/* <Route path="count-order" element={<CountOrder />} /> */}
        {/* <Route path="contact" element={<App />} /> */}
        {/* <Route path="*" element={<App />} /> */}
      </Route>
      <Route path="/count-order" element={<CountOrder />}>
        <Route index element={<CountOrder />} />
        {/* <Route path="detail" element={<App />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
