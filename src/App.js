import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Navigation from './components/Navagation'
import UserProfile from './components/UserProflie'

class App extends Component {
  componentDidMount(){
    fetch('https://api.themoviedb.org/3/movie/550?api_key=89dfa45b0ad821404ff430ecb24862aa')
      .then((res) => res.json())
      .then((data)=> {
        console.log('data: ', data)
      })      
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
         <Navigation />
          <SearchBox />
          <UserProfile />
        </header>
        <Hero />
        <TitleList 
          title="Search Results" 
          movies={this.props.searchResults} />
        <TitleList 
          title="My Movies" 
          movies={this.props.myMovieList} />
      </div>
    );
  }
}
export default App;
