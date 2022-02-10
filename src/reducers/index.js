import {ADD_MOVIES} from '../actions';
import {ADD_TO_FAVOURITE} from '../actions';
import {REMOVE_FROM_FAVOURITES} from '../actions';

const initialMoviesState = {
    list: [],
    favourites: []
}


export default function movies(state = initialMoviesState , action){
     
          switch (action.type) {
              case ADD_MOVIES:
                return {
                    ...state,
                    list : action.movies
                }
               case ADD_TO_FAVOURITE:
                   return {
                       ...state,
                       favourites:  [action.movie , ...state.favourites]
                   }
                   case REMOVE_FROM_FAVOURITES:
 
                      const filteredArray = state.favourites.filter(
                          movie => movie.Title!==action.movie.Title
                      );

                        return {
                           ...state,
                           favourites: filteredArray

                       }
          
              default:
                  return state;
          }
}





