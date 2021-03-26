import './App.scss';

import DoubleColArticle from './components/DoubleColArticle';
import SingleColArticle from './components/SingleColArticle';
import Sidenav from './components/Sidenav';
import TechDetails from './components/TechDetails';

function App() {
  return (
    <main>
      <header>
        <h1>Daryl Tang Sen</h1>
        <h2>Full-Stack Web Developer</h2>
        <div id="external-profiles">
          <a target="_blank" href="https://github.com/daryl-sen">Github</a>
          <a target="_blank" href="https://www.linkedin.com/in/daryl-tang-755753207/">LinkedIn</a>
        </div>
        <div id="contact-info">
          <div>
            Email: tsdaryl@gmail.com
          </div>
          <div>
            Phone: 604-727-4540
          </div>
        </div>
      </header>
      <Sidenav />
    </main>
  );
}

export default App;
