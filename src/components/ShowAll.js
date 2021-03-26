import CareerSummary from '../CareerSummary';
import Summary from '../Summary';
import Education from '../Education';
import FeaturedProjects from '../FeaturedProjects';
import Skills from '../Skills';

function ShowAll() {

  return (
    <>
      <Summary />
      <Skills />
      <FeaturedProjects />
      <Education />
      <CareerSummary />
    </>
  );
}

export default ShowAll;
