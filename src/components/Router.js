import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Layout from "./Layout";
import Resume from './Resume';
import Projects from "./Projects";


const Router = () => {
  render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route exact path="/" component={Projects} />      
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/resume" component={Resume} />      
    </Route>
    </Routes>
  </BrowserRouter>
  )
  };

export default Router;