import React, {Component} from 'react'

class Info extends Component {

    render(){ 
    console.log(this.props.value)
       return (
           <div className="info-box">
               <h1>{this.props.value}</h1>
           </div>
       )
    }
}

export default Info;