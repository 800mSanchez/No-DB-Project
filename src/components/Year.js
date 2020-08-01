import React, {Component} from 'react'

class Year extends Component {

    render(){ 
    console.log(this.props.value)
       return (
           <div className="year-box">
               <input value={this.props.value} />
           </div>
       )
    }
}

export default Year;