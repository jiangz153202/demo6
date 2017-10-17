import React, { Component } from 'react';
import './dog.css';

class Dog extends Component {
    
    constructor(){
        super()
        this.state ={
            isRunning:false,
            isBarking:false
        }
    }
    bark(){
        console.log('wow,that\'s Dog,It\'s bark,');
        this.setState({
            isBarking:true
        })
        
         setTimeout(() => this.setState({ isBarking: false }), 20)
    }
    run(){
        console.log(' AND Run!!!');
        this.setState({
            isRunning:true
        })
         setTimeout(() => this.setState({ isRunning: false }), 20)
    }
    handleClick(){
        this.bark();
        this.run();
        setTimeout(function(){
            console.log('20ms 后,Dog Stop');
          
        },20);
    }
    render(){
         return (<div onClick={this.handleClick.bind(this)}>
             别人的Dog
         </div>)
    }
}

export default Dog;