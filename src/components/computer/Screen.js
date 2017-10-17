import React, { Component } from 'react';
import './computer.css';

class Screen extends Component{
    static defaultProps = {
      showContent: '无内容',
    }
    render(){
        return (
            <div className="screen">
                {this.props.showContent}
            </div>
        )
    }
}

export default Screen;