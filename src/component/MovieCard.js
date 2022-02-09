import React, { Component } from 'react';
import { addFavourite } from '../actions';

export class MovieCard extends Component {
     
      handleFavouriteClick = () => {
           const {movie} = this.props;
           this.props.dispatch(addFavourite(movie));
      }

      handleUnFavouriteClick = (movie) =>{
          const{movie} = this.props;

          


      }

  render() { 
       const {movie,isFavourite} = this.props;
       return(
         <div className='movie-card'>
                 <div className='left'>
                      <img alt="movie-poster" src={movie.Poster} />
                      </div>
                <div className='right'>
                     <div className='title'>{movie.Title}</div>
                     <div className='plot'>{movie.Plot}</div>
                     <div className='footer'>

                         <div className='rating'>{movie.imdbRating}</div>
                         {
                             isFavourite
                             ?  <button className='unfavourite-btn' onClick={this.handleUnFavouriteClick}>UNFAVOURITE</button>
                             :  <button className='favourite-btn' onClick={this.handleFavouriteClick}>FAVOURITE</button>
                         }
                        
                     </div>
                     
                    </div>           
 
         </div>
    );
  }
}

export default MovieCard;
