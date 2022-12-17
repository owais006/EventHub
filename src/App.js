import './App.css';
import Header from "./MyComponents/Header";
import Footer  from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import  Body  from "./MyComponents/Body";
import  {Createevent} from "./MyComponents/Createevent";
import Service from "./MyComponents/Service";
import Login from './MyComponents/Login';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  // let Project="MOQ";
  return (
    <Router>
      <Header   searchBar={false}/> 
          <Route exact path="/" render={()=>{
            return(
            <>
            <Body/>
            </>) 
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/createevent" padding={false}>
            <Createevent/>
          </Route>
          <Route exact path="/service">
            <Service/>
          </Route> 
          <Route exact path="/login">
            <Login />
          </Route> 
      <Footer/>
    </Router>
  );
}
export default App;
