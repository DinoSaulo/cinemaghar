import React from "react";
import {data} from '../data';
import { addMovies } from "../actions";

import NavBar from "./NavBar";
import MovieCard from "./MovieCard";


class App extends React.Component{

 componentDidMount () {

   const {store} = this.props;


        store.subscribe(()=> {
            console.log("store" , store.getState());
          this.forceUpdate();

        })   

  // make api call

  // tell the browser that yes we want to add these movies in store(dispatch an action)
          
             store.dispatch(addMovies(data));
            console.log("state" , this.props.store.getState());
 }

  isMovieFavourite = (movie) =>{
    const{favourites} = this.props.store.getState();
      
    const index = favourites.indexOf(movie);

    if(index !== -1)
    {
      return true;
    }

    return false;
 

  }


 render(){
  const {list} = this.props.store.getState();  //{list:[], favourites:[]}
  
    return (
    <div className="App">
         <NavBar/>

          <div className="main">
            <div className="tabs">
              <div className="tab">MOVIES</div>
              <div className="tab">FAVOURITES</div>
            </div>
            <div className="list">
              {list.map((movie,index) => (
                     
                     <MovieCard movie={movie}
                      key={`movie-${index}`}
                       dispatch={this.props.store.dispatch}
                       isFavourite = {this.isMovieFavourite(movie)}
                       />
              ))}
            </div>
          </div>
       </div>
  );
}
}
export default App;
