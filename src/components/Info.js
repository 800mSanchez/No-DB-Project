import React, {Component} from 'react'

class Info extends Component {

    render(){ 
    console.log(this.props.value)
       return (
           <div className="info-box">
               <input value={this.props.value} />
           </div>
       )
    }
}

export default Info;