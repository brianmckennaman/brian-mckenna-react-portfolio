import './App.css';
import '../src'
import AboutMe from "./components/about"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Header from "./components/header"
import Resume from "./components/resume"
import Contact from "./components/contact"
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
    <div className="App">
    <Header />
    <Navbar />
      {/* {arr.map(item => {
        return <AboutMe mops={item.name} />
      })} */}
    <AboutMe />
    <Footer />
    </div>
  );
}

export default App;
