import './App.css';
import '../src'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutMe from "./pages/about"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Header from "./components/header"
import Resume from "./pages/resume"
import Contact from "./pages/contact"
import Apps from "./pages/apps"
function App() {

  var styles = { background: { background: "#4fbfff"}}
  return (
    <Router>
      <div style={styles.background} className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route exact path='/brian-mckenna-react-portfolio' element={<AboutMe />}>
          </Route>
          <Route exact path='/apps' element={<Apps />}>
          </Route>
          <Route exact path='/contact' element={<Contact />}>
          </Route>
          <Route exact path='/resume' element={<Resume />}>
          <Route exact path='*' element={<AboutMe />}>
          </Route>
        </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
