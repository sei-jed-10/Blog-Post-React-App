import React, {Component} from 'react';
import Comment from './Comment.js';
import Author from './Author.js'



class Main extends Component{
    constructor(props){
        super();
        this.state = {
          body: props.body
        }
      }
      
      changeBody(e){
        this.setState({
          body: prompt("what should be the new body value")
        })
      }
      
      onChangeBody(e){
        this.setState({
          body: e.target.value
        })
      }
      
        render(){
      
          const allComments = [
            <Comment body = {this.props.comments[0]} />,
            <Comment body = {this.props.comments[1]} />,
            <Comment body = {this.props.comments[2]} />
          ];
      
          const allAuthors = [
            <Author body={this.props.allauthors[0]} />,
            <Author body={this.props.allauthors[1]} />,
            <Author body={this.props.allauthors[2]} />
          ];
      
          return(
            <div>
               <h1>{this.props.title}</h1>
               <p>{allAuthors}</p>
               <p>{this.state.body}</p>
               <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
               <input type="text" onChange={(e) => this.onChangeBody(e)}></input>
               <h3>Comments:</h3>
               {allComments}
            </div>
          )
        }
      }


export default Main;
