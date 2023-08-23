import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Layout from "./Layout";
import Resume from './Resume';
import ProjectPage from "./ProjectPage";


const Router = () => {
  render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route exact path="/" component={ProjectPage} />      
      <Route exact path="/projects" component={ProjectPage} />
      <Route exact path="/resume" component={Resume} />      
    </Route>
    </Routes>
  </BrowserRouter>
  )
  };

export default Router;