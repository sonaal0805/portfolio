
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Portfolio from './components/Portfolio/Portfolio';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (

      <Routes>
        <Route path = "/" exact = {true} element = {<Layout/>}>
          <Route path = "/" exact = {true} element = {<Home/>}/>
          <Route path = "/home" exact = {true} element = {<Home/>}/>

          <Route path= "/about" exact = {true} element = {<About/>}/>
          <Route path= "/projects" exact = {true} element = {<Portfolio/>}/>
          <Route path= "/contact" exact = {true} element = {<Contact/>}/>

        </Route>


      </Routes>
    
  );
}

export default App;
