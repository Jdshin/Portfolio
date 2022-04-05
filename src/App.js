import './App.css';

import {Route, Routes} from 'react-router';
import Home from './pages/Home';
import Resume from './pages/About';
import Projects from './pages/Projects';
import Games from './pages/Games';
import Academia from './pages/Academia';
import Contact from './pages/Contact';
import NavComp from './components/NavComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Hello</h1
        >
      </header> */}
      <NavComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Resume />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/games" element={<Games />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
