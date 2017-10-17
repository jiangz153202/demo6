import React , { Component } from 'react';
import CommentInput from './CommentInput.js';
import CommentList from './CommentList.js';
import './commentApp.css';

export default class CommentApp extends Component{
    constructor (){
        super();
        this.state = {
            comments:[]
        }
    }
    
    
    handleSubmitComment(comment){
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        
        this.state.comments.push(comment);
        
        this.setState({
            comments:this.state.comments
        })
    }
    
    render(){
        return(
           <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} /> 
           </div>
        )
    }
}