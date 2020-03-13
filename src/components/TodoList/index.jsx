import React, { Component} from 'react'
import {TodoItem} from './TodoItem'
import PropTypes from 'prop-types'
export class TodoList extends Component {
    static propTypes = {
        todoList:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            title:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        })).isRequired
    } 
    render() {
        return (
           
            <div className="todoList">
              {this.props.todoList.map((item)=>{
                return  <TodoItem {...item} key={item.id}
                rewriteChecked={this.props.rewriteChecked}
                ></TodoItem>  
              })} 
             
            </div>
        )
    }
}

export default TodoList
