import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { StickyNavbar } from './components/StickyNavbar';
import { FooterWithSocialLinks } from './components/FooterWithSocialLinks';
import PopularMovies from './pages/PopularMovies';
import Read from './pages/read';

function App() {
  return (
    <>

      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}

      <StickyNavbar />
      <Read/>
      {/* <Home /> */}
      {/* <PopularMovies/> */}
      <FooterWithSocialLinks />
    </>
  );
}

export default App;
