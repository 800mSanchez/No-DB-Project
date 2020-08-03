import React, {Component} from 'react';
import axios from 'axios'
import './reset.css';
import './App.css';
import Header from './components/Header';
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
      index: 0,
      title: "",
      year: "",
      poster: ""
    }

    this.increaseChange = this.increaseChange.bind(this)
    this.decreaseChange = this.decreaseChange.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.updateMovie = this.updateMovie.bind(this)
    this.editMovie = this.editMovie.bind(this)
  }

  componentDidMount(){
    this.getMovies()
  }


  getMovies = () => {
    axios.get('/api/movies')
    .then( res => { 
      this.setState({
      movies: res.data
     })
   } 
 ).catch( err => console.log(err))
};

addMovie = () => {
  const {title,year,poster} = this.state
  axios.post('/api/movies', {title, year, poster})
    .then( res => {
      this.setState({
        movies: res.data,
        title: "",
        year: "",
        poster: ""
      })
    })
    .catch( err => console.log(err))
}

  deleteMovie = (id) => {
    axios.delete(`/api/movies/${id}`)
    .then(res => {
      this.setState({
        movies: res.data
      })
    }).catch( err => console.log(err))
  }

  updateMovie = (id) => {
    axios.put(`/api/movies/updated/${id}`)
    .then( res => {
      this.setState({movies: res.data});
    }).catch( err => console.log(err))
  }

  editMovie = (id) => {
    const {title} = this.state
    axios.put(`/api/movies/title/${id}`, {title})
    .then( res => {
      this.setState({
        movies: res.data,
        title: ""
      })
    }).catch(err => console.log(err))
  }

increaseChange = () => {
  this.state.index === this.state.movies.length -1 ? this.setState({index: this.state.index}) : this.setState({index: this.state.index + 1})
}

decreaseChange = () => {
  this.state.index > 0 ? this.setState({index: this.state.index - 1}) : this.setState({index: this.state.index})
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

  render(){
  console.log(this.state.movies) 
  let filteredMovies = this.state.movies.filter((element, index) => element.id === this.state.index).map((el, i) => {
    return <Posters url= {this.state.movies[this.state.index].poster}/>
  } )
  let filteredTitle = this.state.movies.filter((element, index) => element.id === this.state.index).map((el, i) => {
    return <Info value= {this.state.movies[this.state.index].title} />
  } )
  let filteredYear = this.state.movies.filter((element, index) => element.id === this.state.index).map((el, i) => {
    return <Year value= {this.state.movies[this.state.index].year} />
  } )

  return (
    <div>
      <Header/>
      <h1 className="add-box">Add Your Favorite Movie</h1>
        <section>
            <input name="title" onChange={e => this.handleChange(e)} value={this.state.title} placeholder="title" />
            <input name="year" onChange={e => this.handleChange(e)} value={this.state.year} placeholder="year" />
            <input name="poster" onChange={e => this.handleChange(e)} value={this.state.poster}  placeholder="poster" />
            <button onClick={this.addMovie}>Submit</button>
        </section>
      {filteredMovies}
      {filteredTitle}
      {filteredYear}
      <div>
      <Buttons className="Buttons"
               nextChange={this.increaseChange}
               previousChange={this.decreaseChange}
               deleteMovie = {this.deleteMovie}
               updateMovie = {this.updateMovie}
               editMovie = {this.editMovie}
               movie = {this.state.movies[this.state.index]}
               />
      </div>
      <Footer/>
    </div>
  )};
};

export default App;
