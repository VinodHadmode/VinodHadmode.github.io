import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import GithubStats from './Pages/GithubStats';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <GithubStats/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
