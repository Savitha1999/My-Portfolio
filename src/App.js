import './App.css';
import Layout from './components/layout/Layout';
import About from './pages/About/About';
import Contacts from './pages/Contact/Contacts';
import Educations from './pages/Education/Educations';
import Technology from './pages/Techstack/Technology';
import WorkExp from './pages/Work/WorkExp';
import Projects from './pages/projects/Projects';
import ScrollToTop from "react-scroll-to-top";
import  {useTheme} from './context/ThemeContext';
import { Zoom } from 'react-reveal';
import MobileApp from './components/layout/MobileNav/MobileApp';


function App() 
{

  const {theme} = useTheme()



  return (
    <>

    <div id={theme} > 
     <MobileApp />
      <Layout />
    
     <div className='container '>

     <About />
     <Educations />
     <Technology />
     <Projects />
     <WorkExp />
     <Contacts />
     </div>

     <Zoom>
     <div className='footer pb-3 ms-3'>
     <h4 className='text-center mt-4'>
        Made With 😊 Savitha &copy; 2024
     </h4>
     </div>
     </Zoom>
     </div>


     <ScrollToTop smooth 
     color='#f29f67' 
     style={{backgroundColor:"#1e1e2c" , borderRadius:"80px"}} />

     
     
    </>
  );
}

export default App;
