import SingleMovie from './SingleMovie.jsx';

const MovieList = (props) => {
    return (      
              <ul className="flex flex-wrap">
                    { props.data.map( (c,indx) => <SingleMovie movie={c} key={indx} changeMovie={props.changeMovie} />) }   
              </ul>
    )
  
  }
  
export default MovieList;