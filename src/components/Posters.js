import React, {Component} from 'react'

class Posters extends Component {

    render(){ 
    console.log(this.props.url)
       return (
           <div className="poster-box">
               <img src={this.props.url} alt="Movie Posters"/>
           </div>
       )
    }
}

export default Posters;