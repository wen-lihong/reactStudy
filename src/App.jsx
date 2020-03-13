import React, { Component } from 'react'
import './App.css'
import{TodoInput,TodoList} from './components/index'
import ajax from "./ajax"
import axios from 'axios'
 export class App extends Component {
    constructor(){
        super()
        this.state={
           todoList:[],
           isLoading:true
        }
       
       
    }
    getData(){
       ajax.getTodo()
       .then(res=>{
            this.setState({
                todoList:res.data
            })
        })
        .finally(()=>{
            this.setState({
               isLoading:!this.state.isLoading
            })
        })
        
    }
    componentDidMount(){
        this.getData()
    }
    rewriteChecked=(id)=>{
        this.setState((prev)=>{
            return {todoList:prev.todoList.map((item)=>{
                if(item.id==id){
                   item.completed = !item.completed
                }
                return item
            })}
        })
    }
    saveInputValue=(title)=>{
        if(!title){
            return
        }
        this.setState((prestate)=>{
         return { todoList:prestate.todoList.concat([
              {id:Math.random(),title:title,completed:true}
         ])
        }
        },
)   
    }
    render() {
     
        return (
            <div className="todo">
               <div className="todoHeader"><h3>代办事项</h3></div>
               <div className="todoContent">
                   <TodoInput saveInputValue={this.saveInputValue}
                   ></TodoInput>
                {
                    this.state.isLoading? <div>loading</div>
                    :<TodoList todoList={this.state.todoList}
                    rewriteChecked={this.rewriteChecked}
                  ></TodoList>
                }   
               </div>
            </div>
        )
    }
}

