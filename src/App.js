import './App.scss';

import DoubleColArticle from './components/DoubleColArticle';
import SingleColArticle from './components/SingleColArticle';
import Sidenav from './components/Sidenav';
import TechDetails from './components/TechDetails';

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <DoubleColArticle />
      <SingleColArticle />
      <Sidenav />
      <TechDetails />
    </>
  );
}

export default App;
