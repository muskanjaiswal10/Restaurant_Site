import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes'

function App() {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };

  }
  return (
    <div className="App">
     <Navbar dark color="primary">
       <div className="container">
         <NavbarBrand href="/">Ristorante con fusion </NavbarBrand>
       </div>
     </Navbar>
     <Menu dishes={this.state.dishes}/>
    </div>
  );
}

export default App;
