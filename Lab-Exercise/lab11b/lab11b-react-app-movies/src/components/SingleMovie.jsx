import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const SingleMovie = (props) => {

    const handleClick = () => {
		props.changeMovie(props.movie.id)
	}

    return (  
            <li className="w-1/4">    
              <div className="card bg-white shadow-md text-gray-700 max-w-full relative">
                <div className="card-image">
                    <figure className="image is-2by3">
                        <img src={' https://image.tmdb.org/t/p/w342' + props.movie.poster + '.jpg'}  alt={props.movie.title} />
                    </figure>
                </div>
                <div className="card-content has-text-centered content-rectangle">
                    <h2>{props.movie.title}</h2>
                    <p>
                        {props.movie.tagline}
                    </p>
                </div>
                <footer>
                    <button onClick={handleClick}>
                        <span className="icon is-small">
                            <FontAwesomeIcon icon={faHeart} /> 
                        </span>
                    </button>
                </footer>
              </div>
            </li>
    )
  
  }
  
export default SingleMovie;