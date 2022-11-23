import './App.css';
import AboutMe from "./components/about"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Header from "./components/header"
function App() {

  var arr = [
    {
      name: "Millie",
    },
    {
      name: "David",
    },
    {
      name: "Roland",
    },
    {
      name: "Sarah",
    },
  ]

  return (
    <div className="App">
    <Header />
     <Navbar />
      {arr.map(item => {
        return <AboutMe mops={item.name} />
      })}
      <Footer />
    </div>
  );
}

export default App;
