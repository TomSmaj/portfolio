import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Resume from './components/Resume';
import Projects from "./components/Projects";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Projects />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;