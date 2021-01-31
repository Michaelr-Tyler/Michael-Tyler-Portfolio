import React from 'react';
import { Route } from 'react-router-dom';
import { AboutMe } from './pages/AboutMe';
import { Contacts } from './pages/Contacts';
import { Experience } from './pages/Experience';
import { Intro } from './pages/Intro';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { Technologies } from './pages/Technologies';

export const AppView = () => {
  return (
    <>
    <Route exact path="/" component={Intro} />
    <Route exact path="/" component={AboutMe} />
    <Route exact path="/" component={Experience} />
    <Route exact path="/" component={Projects} />
    <Route exact path="/" component={Contacts} />
    <Route exact path="/" component={Technologies} />
    <Route exact path="/blog" component={Blog} />
    </>
  )
}