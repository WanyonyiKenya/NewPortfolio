import { useEffect, useState } from "react";
import useMediaQuery from './hooks/useMediaQuery'
import Nav from "./scenes/Nav  ";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import Skills from "./scenes/Skills";
import Projects from './scenes/Projects'
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";


function App() {
  
  const [pageOn, setPageOn] = useState('home')
  const [topPage, setTopPage] = useState(false)
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)')

  useEffect(()=>{
    const handleScroll = () => {
      if(window.screenY === 0) setTopPage(true)
      if(window.screenY !==0) setTopPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[])


  return (
    <div className="app bg-deep-blue" >
     <Nav 
     pageOn = { pageOn}
     setPageOn = {setPageOn}
     isTopOfPage = {topPage}
     />
     <div className="w-5/6 mx-auto md:h-full">
      {
        isAboveMediumScreens && (
          <DotGroup 
            pageOn = {pageOn}
            setPageOn = {setPageOn}
          />
        )
      }
      <Landing setPageOn = {setPageOn}/>
     </div>
     <LineGradient />
     <div className="w-5/6 mx-auto md:h-full">
      <Skills />
     </div>
     <LineGradient/>
     <div className="w-5/6 mx-auto">
      <Projects />
     </div>
     <LineGradient/>
     <div className="w-5/6 mx-auto mdfull:h-" >
      <Testimonials />
     </div>
     <LineGradient/>
     <div className="w-5/6 mx-auto md:h-full" >
      <Contact />
     </div>
     <LineGradient/>
     <div className="w-5/6 mx-auto md:h-full" >
      <Footer />
     </div>
    </div>
  );
}

export default App;
