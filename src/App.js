import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar  from "./components/NavBar";
import Portfolioo from "./components/Portfolioo";

import SocialList from "./components/SocialList";

function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <About/>
    <Portfolioo/>
    <Experience/>
    <Contact/>
    <SocialList/>
    </div>
  );
}

export default App;
