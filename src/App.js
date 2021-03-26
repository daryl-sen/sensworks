import './App.scss';

import Sidenav from './components/Sidenav';
import LinkButton from './components/LinkButton';

import DoubleColArticle from './components/DoubleColArticle';
import SingleColArticle from './components/SingleColArticle';
import TechDetails from './components/TechDetails';

function App() {
  return (
    <main>
      <header>
        <h1>Daryl Tang Sen</h1>
        <h2>Full-Stack Web Developer</h2>
        <div id="external-profiles">
          <LinkButton link="mailto:tsdaryl@gmail.com" linkText="Email: tsdaryl@gmail.com" newTab={true}/>
          <LinkButton link="tel:604-727-4540" linkText="Phone: 604-727-4540" newTab={true}/>
          <LinkButton link="https://github.com/daryl-sen" linkText="GitHub" newTab={true}/>
          <LinkButton link="https://www.linkedin.com/in/daryl-tang-755753207/" linkText="LinkedIn" newTab={true}/>
        </div>
      </header>
      <hr/>
      <Sidenav />
    </main>
  );
}

export default App;
