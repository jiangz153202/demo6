import React , { Component } from 'react';

const users=[
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

export default class viewList extends Component {
    
    render(){
        const usersElements = []; //保存以后每个用户渲染以后的jsx数组
      
        for(let user of users){
            usersElements.push(
                <div  key={user.username}>
                    <div>姓名： {user.username}</div>
                    <div>年龄： {user.age}</div>
                    <div>性别： {user.gender}</div>
                </div>
            )
        }
        
        return (
           <div>
             {usersElements} 
           </div>
        )
    }
}