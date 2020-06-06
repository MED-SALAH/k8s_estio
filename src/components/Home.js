import React from 'react';
//import logo from './logo.svg';
import '../App.css';
import './Home.css';
import {connect} from 'react-redux'

 class Home extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                id:"000",
            };
            }
          
    render (){
       let id = this.props.id
         return (
            <div className = 'centerHome'>
                <h1>Bonjour et bienvenue {id}</h1>
            </div>

                );
            }
}
const mapStateToProps = (state) => {
    return {
        id : state.id 
}
}
export default connect(mapStateToProps)(Home);