import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router,Switch, Route,Routes } from "react-router-dom";
function App() {
  return (
    <div>
   <Router>
     <Header />
     <main>
       <section>
       
         <Routes>
           <Route path="/"  element={<Home/>}/>

           <Route path="/about" element={<About/>}/>
           <Route path="/contact" element={<Contact/>}/>
  
           </Routes>
         
       </section>
     </main>
   </Router>
    </div>
  );
}

export default App;
