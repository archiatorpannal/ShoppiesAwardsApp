import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const NominationListItem = ({ movie }) => {
  const { Title, imdbID } = movie;
  const { removeMovieFromNominations } = useContext(GlobalContext);

  return (
    <li className="nomination-list-item">
      {/* <img src={Poster} alt={Title} className="poster-sm" /> */}

        <h6>{Title}</h6>

        <div className="controls-container">
        <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" className="button btn btn-success btn-small"><i className="fa fa-plus"></i></a>
          {
              <button onClick={() => removeMovieFromNominations(movie.imdbID) } className="btn btn-danger btn-small my-3 px-3 mx-2"><i className="fa fa-trash"></i></button>    
          }
          
        </div>
    </li>
  )  
}

export default NominationListItem;