import './App.css';
//import BdNavbar from './component/navbar';
//import Footer from './component/footer';
//import {BrowserRouter, Route} from 'react-router-dom'
//import Dashboard from './bdbackoffices/dashboard';
//import Acceuil from './bdfrontoffices/acceuil';
//import LogIn from './bdbackoffices/loginPage';
import {AuthContext} from './component/authcontex'
import React,{useContext} from 'react';

//import { Provider } from 'react-redux';
//import store from './store';

function App() {
  const {user,setUser,isAuthenticated,setIsAuthenticated} = useContext(AuthContext)
  console.log(user)
  console.log(isAuthenticated)
  return (
    <p>placeholder</p>
    /*<BrowserRouter >
      <BdNavbar/>
      <main>
        <Route exact path='/' component={Acceuil} />
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/Login' component={LogIn}/>
      </main>
      <Footer/>
    </BrowserRouter>*/
  );
}

export default App;
