import React, { Component, createRef } from 'react'

export class TodoInput extends Component {
    constructor(){
        super()
        this.state={
            inputValue:''
        }
       this.inputDom = createRef()
    }
    onChangeInput=(e)=>{
        
        this.setState({
            inputValue:e.target.value
          })
    }
    handleBtn=(e)=>{
     this.props.saveInputValue(this.state.inputValue)
     this.setState({
        inputValue:''
      },()=>{
          this.inputDom.current.focus()
      })
    }
    render() {
        return (
            <div className="todoInput">
                <input type="text" ref = {this.inputDom}
                 value={this.state.inputValue} onChange={
                    this.onChangeInput
                }/>
                <input type="button" value="添加" onClick={this.handleBtn}/>
            </div>
        )           
    }
}

export default TodoInput
