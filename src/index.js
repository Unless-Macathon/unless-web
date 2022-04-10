import React from 'react';
import ReactDOM from 'react-dom';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MP from "./components/MP";
import Statistics from "./components/Statistics";
import AllParties from "./components/AllParties";
import Voting from "./components/Voting";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MP" element={<MP />} />
      <Route path="/Statistics" element={<Statistics />} />
      <Route path="/allparties" element={<AllParties />} />
      <Route path="/voting" element={<Voting />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
