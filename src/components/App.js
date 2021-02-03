import React from 'react';
import { Route } from 'react-router-dom';
import { AboutMe } from './pages/AboutMe';
import { Contacts } from './pages/Contacts';
import { Intro } from './pages/Intro';
import { Projects } from '../components/projects/Projects';
import { Blog } from '../components/blog/Blog';
import { Technologies } from './pages/Technologies';
import './App.css'


export const App = () => {
  return (
   <div className="container">
    <Route exact path="/" component={Intro} />
    <Route exact path="/AboutMe" component={AboutMe} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/contacts" component={Contacts} />
    <Route exact path="/technologies" component={Technologies} />
    <Route exact path="/blog" component={Blog} />
   </div>
  )
}