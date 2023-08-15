import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from "./components/Layout";
import Resume from './components/Resume';
import ProjectPage from "./components/ProjectPage";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProjectPage />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;