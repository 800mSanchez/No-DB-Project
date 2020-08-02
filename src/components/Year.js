import React, {Component} from 'react'

class Year extends Component {
    
    render(){ 
    console.log(this.props.value)
       return (
           <div className="year-box">
               <h1>{this.props.value}</h1>
           </div>
       ) 
    }
}

export default Year;