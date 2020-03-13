import React, { PureComponent } from 'react'

export class TodoItem extends PureComponent {
    constructor(){
        super()
    }
    
    handleCheck(id){
        this.props.rewriteChecked(id)
    }

    render() {
        console.log('item')
        return (
            
           
                <div className="todoItem">                       
                <input type="checkbox" checked={this.props.completed}
                   onChange={this.handleCheck.bind(this,this.props.id)}
                />
                <span>{this.props.title}</span>
                <span>{this.props.completed? '已完成':'未完成'}</span> 
             </div>
           
           
           
        )
    }
}

export default TodoItem
