import SingleFavorite from './SingleMovie.jsx';

const FavoriteList = (props) => {
    return(
        <div className="favorites">
           
            {props.favorite.map((c,indx) => <SingleFavorite sf={c} key={index}/>)}
        </div>
    )
}

export default FavoriteList;