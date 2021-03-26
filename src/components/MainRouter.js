import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import CareerSummary from '../CareerSummary';
import Summary from '../Summary';
import Education from '../Education';
import FeaturedProjects from '../FeaturedProjects';
import Skills from '../Skills';

const MainRouter = () => {

  const [ activeLink, setActiveLink ] = useState('summary');
  
  return (
    <>
      <Router>
          
        <nav>
          <div>
            <Link to="/summary">Summary</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/featured">Featured Projects</Link>
            <Link to="/education">Education</Link>
            <Link to="/career">CareerSummary</Link>
          </div>
        </nav>

        <Switch>
          <Route path="/summary" component={Summary} /> 
          <Route path="/skills" component={Skills} /> 
          <Route path="/featured" component={FeaturedProjects} /> 
          <Route path="/education" component={Education} /> 
          <Route path="/career" component={CareerSummary} /> 
        </Switch>

      </Router>
    </>
  )
};

export default MainRouter;