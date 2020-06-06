import React from 'react';
//import logo from './logo.svg';
import { Button, FormGroup, Label,Container, Row, Col,Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import '../App.css';
import './ProductElement.css';
import {connect} from 'react-redux';
import actions from '../actions/Actions';
import axios from 'axios';
 class ProductElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            name: '',
            description : ''
    };

      }
    handleClick=()=>{
        this.props.sendId(this.props.product.id);

        axios.get(`/analytics?type=acheté&source=Product&userId=23&dateEvent=`+new Date().toLocaleString()+`&productId=`+this.props.product.id)
        .then(res => {
        console.log(res)
        let message = JSON.parse(JSON.stringify(res.data.message))
        console.log(message)
        //alert(message)
      });

      let p = JSON.stringify(this.props.product)
      console.log("product a envoyer "+JSON.stringify(this.props.product))

      axios.post(`/product`, {p})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }

    render(){ 
        console.log("je suis la ")
        return (
           <Container >
                <Row>
                    <Col xs="3">
                        <FormGroup /*className ='Border'*/>
                            <Col style = {{width:'100%', height: '100%'}}>
                                <Row style={{height:"30%"}}>
                                 <Label className = 'centerName, textBody' for="exampleText">{this.props.product.name}</Label>
                                </Row>
                                <Row style={{height:"70%"}}>
                                 <Image style = {{width :'100%', height: '100%'}} src={this.props.product.url} rounded />
                                </Row>
                            </Col>
                        </FormGroup>
                    </Col>

                    <Col xs="6">
                        <FormGroup  /*className ='Border'*/>
                            <Card >
                                <CardText className = "textDescription">Description </CardText>
                                <CardBody> 
                                    <CardText className = "textBody">Prix : {this.props.product.description.prix} euro</CardText>
                                    <CardText className = "textBody">Année : {this.props.product.description.annee} </CardText>
                                    <CardText className = "textBody">Garantie : {this.props.product.description.garantie} ans</CardText>
                                 </CardBody>
                            </Card> 
                        </FormGroup>
                    </Col>

                    <Col xs="3"> 
                        <FormGroup /*className ='Border'*/>
                         <Button color="success" className= 'centerButton' onClick = {this.handleClick}>Acheter</Button>
                        </FormGroup>
                    </Col>
                </Row>
                
            </Container>
            
        
                );
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        sendId :(id) => {dispatch(actions.sendId(id))}
    }
}
export default connect(null,mapDispatchToProps)(ProductElement);