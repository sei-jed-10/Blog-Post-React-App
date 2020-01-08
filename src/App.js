import React, {Component} from 'react';
import './App.css';
import Main from './Main';
import About from './About';
import FavoriteFood from './FavoriteFood';
import FavoriteMovie from './FavoriteMovie';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class App extends Component{
  render(){
    
const post = {
  title: "Dinosarus are awesome",
  author: ["Stealthy Stegosaurus", "Tiny T-Rex", "Ivory Iguanodon"],
  body: "Check out this body property!",
  comments: ["First!", "Great post", "Hire this author now!"]
}
    return(
      <Router>
       <nav>
        <Link to="/">Main</Link>{' '}
        <Link to="/home">Home</Link>{' '}
        <Link to="/favoritFood">Favorite Food</Link>{' '}
        <Link to="/favoriteMovie">Favorite Movie</Link>{' '}
        <Link to="/about">About</Link>
      </nav>

      <div>
        <Route exact path="/" render={
                (props) => (<Main
                          {...props}
                          title={post.title}
                          allauthors={post.author}
                          body={post.body}
                          comments={post.comments} />
         )}/>
        <Route path="/home" component={Home} />
        <Route path="/favoritFood" component={FavoriteFood} />
        <Route path="/favoriteMovie" component={FavoriteMovie} />
        <Route path="/about" component={About} />

      </div>
    </Router>
    );
  }
}

export default App;