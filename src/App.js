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

//For Deployment on Github only
var prePath = "/Blog-Post-React-App";

//For Local version
//var prePath = "";
    return(
      <Router>
       <nav>
        <Link to={prePath + "/"}>Main</Link>{' '}
        <Link to={prePath + "/home"}>Home</Link>{' '}
        <Link to={prePath + "/favoritFood"}>Favorite Food</Link>{' '}
        <Link to={prePath + "/favoriteMovie"}>Favorite Movie</Link>{' '}
        <Link to={prePath + "/about"}>About</Link>
      </nav>

      <div>
        <Route exact path={prePath + "/"} render={
                (props) => (<Main
                          {...props}
                          title={post.title}
                          allauthors={post.author}
                          body={post.body}
                          comments={post.comments} />
         )}/>
        <Route path={prePath + "/home"} component={Home} />
        <Route path={prePath + "/favoritFood"} component={FavoriteFood} />
        <Route path={prePath + "/favoriteMovie"} component={FavoriteMovie} />
        <Route path={prePath + "/about"} component={About} />

      </div>
    </Router>
    );
  }
}

export default App;