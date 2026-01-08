import './App.css'
import Header from './components/Header'
import About from './components/About'
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App
