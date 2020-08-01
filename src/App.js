import React, {Component} from 'react';
import axios from 'axios'
import './reset.css';
import './App.css';
import Header from './components/Header';
/* import movies from "../server/movies.json" */
import Posters from "./components/Posters"
import Info from "./components/Info"
import Year from "./components/Year"
import Footer from "./components/Footer"
import Buttons from './components/Buttons';



class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      index: 1
    }

    this.increaseChange = this.increaseChange.bind(this)
    this.decreaseChange = this.decreaseChange.bind(this)

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

increaseChange = () => {
  this.state.index < 9 ? this.setState({index: this.state.index + 1}) : this.setState({index: this.state.index})
}

decreaseChange = () => {
  this.state.index > 0 ? this.setState({index: this.state.index - 1}) : this.setState({index: this.state.index})
}
 
  render(){
  console.log(this.state.movies) 
  let filteredMovies = this.state.movies.filter((element, index) => element.id === this.state.index).map((el, i) => {
    return <Posters url= {this.state.movies[this.state.index].poster}/>
  } )
  let filteredMovie = this.state.movies.filter((element, index) => element.id === this.state.index).map((el, i) => {
    return <Info value= {this.state.movies[this.state.index].title} />
  } )
  let filteredYear = this.state.movies.filter((element, index) => element.id === this.state.index).map((el, i) => {
    return <Year value= {this.state.movies[this.state.index].year} />
  } )

  return (
    <div>
      <Header/>
      {filteredMovies}
      {filteredMovie}
      {filteredYear}
      <div>
      <Buttons className="Buttons"
               nextChange={this.increaseChange}
               previousChange={this.decreaseChange}/>
      </div>
      <Footer/>
    </div>
  )};
};

export default App;
