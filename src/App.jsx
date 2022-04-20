import About from './components/about/About';
import Intro from './components/intro/intro'
import ProjectList from './components/ProjectList/ProjectList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div style={{backgroundColor:darkMode ? "#222" : "white",color : darkMode && "white"}}>
    <Toggle/>
    <Intro/>
    <About/>
    <ProjectList/>
    <Contact/>
  </div>
};

export default App;