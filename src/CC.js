import React,{Component} from 'react'
import "./Counter.css"

class CC extends React.Component{


   constructor(){
       super()
       this.state={
           number:0
       }
   }

   add=()=>{
       this.setState({number:this.state.number+1})
   }

   subtract=()=>{
       this.setState({number:this.state.number-1})
   }


    render(){
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.add}>ADD 1</button>
                <button onClick={this.subtract}>SUBTRACT 1</button>
            </div>
        )
    }
}

export default CC;