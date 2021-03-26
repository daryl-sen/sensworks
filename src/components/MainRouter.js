import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import CareerSummary from '../CareerSummary';
import Summary from '../Summary';
import Education from '../Education';
import FeaturedProjects from '../FeaturedProjects';
import Skills from '../Skills';
import ShowAll from './ShowAll';

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
            <Link to="/career">Career Summary</Link>
            <Link to="/">Show All</Link>
          </div>
        </nav>

        <Switch>
          <Route exact path="/summary" component={Summary} /> 
          <Route exact path="/skills" component={Skills} /> 
          <Route exact path="/featured" component={FeaturedProjects} /> 
          <Route exact path="/education" component={Education} /> 
          <Route exact path="/career" component={CareerSummary} />
          <Route exact path="/" component={ShowAll} />
        </Switch>

      </Router>
    </>
  )
};

export default MainRouter;