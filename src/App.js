import React, {Component} from 'react';
import axios from 'axios'
import './reset.css';
import './App.css';
import Header from './components/Header';


class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    this.getMovies()
  }


  getMovies = () => {
    axios.get('/api/movies')
    .then( res => { 
      console.log(res)
      this.setState({
      movies: res.data
     })
   } 
 ).catch( err => console.log(err))
};
 
  render(){
  console.log(this.state.movies) 
  return (
    <div>
      <Header/>
    </div>
  )};
};

export default App;
