import './App.css';
import BdNavbar from './component/navbar';
import Footer from './component/footer';
import {BrowserRouter, Route} from 'react-router-dom'
import Dashboard from './bdbackoffices/dashboard';
import Acceuil from './bdfrontoffices/acceuil';
//import { Provider } from 'react-redux';
//import store from './store';

function App() {
  return (
  
    <BrowserRouter >
      <BdNavbar/>
      <main>
        <Route exact path='/' component={Acceuil} />
        <Route exact path='/dashboard' component={Dashboard}/>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
