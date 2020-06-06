import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route,Link} from 'react-router-dom';
import Product from './components/Product';
import Home from './components/Home';
import { Navbar } from 'reactstrap';
import axios from 'axios';

class App extends React.Component {
  /*une methode qui envoie une requéte pour */
  sendEventImpression=(source)=>{
    axios.get(`/analytics?type=impression&source=`+source+`&userId=23&dateEvent=`+new Date().toLocaleString())
      .then(res => {
        console.log(res)
      });
  }

  render(){
  return (
    <Router>
    <div>
      <Navbar color='' light expand="md" fixed={`top`} className="navDark">
      <ul className="navbar-nav mr-auto" >
        <li><Link onClick = {()=>{this.sendEventImpression("Home")}} style={{color: "white"}} to={'/'} className="nav-link"> Home </Link></li>
        <li><Link onClick = {()=>{this.sendEventImpression("Product")}} style={{color: "white"}} to={'/Product'} className="nav-link">Product</Link></li>
      </ul>
      </Navbar>
      <hr /> <hr /> <hr />
      <Switch >
          <Route exact path='/' component={Home} />
          <Route path='/Product' component={Product} />
      </Switch>
    </div>
  </Router>
  );
}
}

export default App;
