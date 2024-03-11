import './App.css';
import Home from './component/Home';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Icones from './component/Icones';
import Study from './component/Study';
import Language from './component/Language';
import Profil from './component/MyProfil';
import Skill from './component/Skill';
import Project from './component/Project';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  console.log(window);
  return (
    <div className='container'>
        <Navbar />
        <Icones />
        <Home />
        <Profil />
        <Skill />
        <Project />
        <Contact />
    </div>
  );
}

export default App;
