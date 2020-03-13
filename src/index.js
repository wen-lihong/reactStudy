import ReactDOM from 'react-dom'
import React,{useState,useEffect} from 'react'


const Count=()=>{
    let [constState,setConstState]=useState(0)
    console.log(constState)
    useEffect(()=>{
        document.title=constState
     })
    
    return (
        <>
        <input type="button" value="-" onClick={()=>{
            setConstState(constState-1)
        }}/>
        <span>{constState}</span>
        <input type="button" value="+" onClick={()=>{
            setConstState(constState+1)
        }}/>
        </>
    )
}
ReactDOM.render(<Count/>,document.getElementById('root'))
