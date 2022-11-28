import './App.css';
import '../src'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutMe from "./components/about"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Header from "./components/header"
import Resume from "./components/resume"
import Contact from "./components/contact"
import Apps from "./components/apps"
function App() {

  // var arr = [
  //   {
  //     name: "Millie",
  //   },
  //   {
  //     name: "David",
  //   },
  //   {
  //     name: "Roland",
  //   },
  //   {
  //     name: "Sarah",
  //   },
  // ]

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        {/* {arr.map(item => {
        return <AboutMe mops={item.name} />
      })} */}
        <Routes>
          <Route exact path='/' element={<AboutMe />}>
          </Route>
          <Route exact path='/apps' element={<Apps />}>
          </Route>
          <Route exact path='/contact' element={<Contact />}>
          </Route>
          <Route exact path='/resume' element={<Resume />}>
        </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
