import ReactDOM from 'react-dom'
import React,{createContext,Component} from 'react'
 const {
    Provider,
    Consumer:CountConsumer    
 }=createContext()

class Aooconter extends Component{
    constructor(){
        super()
        this.state={
            count:100
        }
    }
    increment=()=>{
       this.setState({
           count:this.state.count+1
       }) 
    }
    decrement=()=>{
        this.setState({
            count:this.state.count-1
        }) 
     }
    render(){
        return(
            <Provider value={{
                count:this.state.count,
                'onincrement':this.increment,
                'ondecrement':this.decrement
            }}>
              {this.props.children }
            </Provider>   
        )
    }
}
class ConterBtn extends Component{
  
    render(){
        return(
            <CountConsumer>
            {
                (ctx)=>{
                   
                   let counterfunc = this.props.type=="increment"?
                   'onincrement':'ondecrement'
                   console.log(ctx[counterfunc])
                   return(
                   <button onClick={ctx[counterfunc]}>
                       {this.props.children}
                   </button>
                   )
                }
            }
           </CountConsumer>
        )
        }
}
class Conter extends Component{

    render(){
        return(
         <CountConsumer>
           {(ags)=>{
               {console.log(ags)}
               return(
               <button>{ags.count}</button>
               )}}
         </CountConsumer>
        )
        }
}

class App extends Component {

    render() {
        return(
          <>
           <ConterBtn type="decrement">+</ConterBtn>
           <Conter/> 
           <ConterBtn type="increment">-</ConterBtn>
         </>
        )
    }
}
ReactDOM.render(
    <Aooconter>
       <App/>
    </Aooconter>,
    document.getElementById('root')
    )
//我现在想的是什么?结构出两个东西，Provider，Consumer
//一个是提供者，一个是接受者。