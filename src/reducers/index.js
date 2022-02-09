import {ADD_MOVIES} from '../actions';
import {ADD_FAVOURITE} from '../actions';
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
               case ADD_FAVOURITE:
                   return {
                       ...state,
                       favourites:  [action.movie , ...state.favourites]
                   }
                   case REMOVE_FROM_FAVOURITES:
                       return {

                       }
          
              default:
                  return state;
          }
}





