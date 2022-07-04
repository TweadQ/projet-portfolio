import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Skill from './page/Skill';
import Home from './page/Home';
import Services from './page/Services';
import Error from './page/Error';
import Portfolio from './page/Portfolio'
import Testimonials from './page/Testimonials'
import Contact from './page/Contact'

function App() {
	return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
