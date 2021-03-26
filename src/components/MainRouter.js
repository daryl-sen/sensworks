import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import CareerSummary from '../CareerSummary';
import Summary from '../Summary';
import Education from '../Education';
import FeaturedProjects from '../FeaturedProjects';
import Skills from '../Skills';

const MainRouter = () => {
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
          <Route path="/dashboard" component={Summary} /> 
          <Route path="/login" component={Skills} /> 
          <Route path="/logout" component={FeaturedProjects} /> 
          <Route path="/register" component={Education} /> 
          <Route path="/register" component={CareerSummary} /> 
        </Switch>

      </Router>
    </>
  )
};

export default MainRouter;