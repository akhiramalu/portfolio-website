import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/contacts' element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
