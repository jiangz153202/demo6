import React, { Component } from 'react';
import Screen from './Screen.js';

class Computer extends Component{
     constructor(){
         super();
         this.state={
             status:'off',
             showContent:'显示器关闭'
         }
     }
     handleClick(){
         let sta,content;
         if(this.state.status == 'on'){
             sta = 'off';
             content = "显示器关闭";
         }else{
             sta = 'on';
             content="显示器打开";
         }
         
         this.setState({
             status:sta,
             showContent:content
         })
     }
     render(){
         return (
            <div>
                <button onClick={()=>this.handleClick()}>开关</button> 
                <Screen showContent={this.state.showContent} />
            </div>
         )
     }
}


export default Computer;