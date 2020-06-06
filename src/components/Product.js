import React from 'react';
//import logo from './logo.svg';
//import { Button, Form, FormGroup, Label, Input, FormText,Container, Row, Col } from 'reactstrap';
import '../App.css';
import ProductElement from './ProductElement';
import axios from 'axios';
import Actions from '../actions/Actions';
import {connect} from 'react-redux';
class Product extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            products : [
             ]
       };
    
    }

    componentDidMount(){
        axios.get(`/api/`)
        .then((res)=> {
          let message = JSON.parse(JSON.stringify(res.data))
          this.props.sendProduct(message)
        });
       
        
    }
      
    render(){ 
        return (
            this.props.product.map(product =>
           
            <ProductElement product = {product} />

              )
        );
    }
}

const mapStateToProps = (state) => {
  return {
      product : state.product
}
}
const mapDispatchToProps = (dispatch) =>{
  console.log("mon action : ")
  return{
   
      sendProduct :(product) => {dispatch(Actions.sendProduct(product))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)