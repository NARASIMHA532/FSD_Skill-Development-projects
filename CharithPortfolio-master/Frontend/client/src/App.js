import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Header from './Components/Header';
import SkillsPage from './Pages/SkillsPage';
import ExperiencePage from './Pages/ExperiencePage';
import ContactPage from './Pages/ContactPage';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <div className='bg-cyan-950 h-full min-w-full scroll-smooth'>
        <Header/>
        <HomePage/>
        <AboutPage/>
        <SkillsPage/>
        <ExperiencePage/>
        <ContactPage/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
