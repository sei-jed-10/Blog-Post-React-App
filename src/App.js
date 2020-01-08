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
        <Link to="/Blog-Post-React-App/">Main</Link>{' '}
        <Link to="/Blog-Post-React-App/home">Home</Link>{' '}
        <Link to="/Blog-Post-React-App/favoritFood">Favorite Food</Link>{' '}
        <Link to="/Blog-Post-React-App/favoriteMovie">Favorite Movie</Link>{' '}
        <Link to="/Blog-Post-React-App/about">About</Link>
      </nav>

      <div>
        <Route exact path="/Blog-Post-React-App/" render={
                (props) => (<Main
                          {...props}
                          title={post.title}
                          allauthors={post.author}
                          body={post.body}
                          comments={post.comments} />
         )}/>
        <Route path="/Blog-Post-React-App/home" component={Home} />
        <Route path="/Blog-Post-React-App/favoritFood" component={FavoriteFood} />
        <Route path="/Blog-Post-React-App/favoriteMovie" component={FavoriteMovie} />
        <Route path="/Blog-Post-React-App/about" component={About} />

      </div>
    </Router>
    );
  }
}

export default App;