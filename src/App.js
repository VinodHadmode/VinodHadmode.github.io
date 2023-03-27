import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import MainRoutes from './Pages/MainRoutes';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
