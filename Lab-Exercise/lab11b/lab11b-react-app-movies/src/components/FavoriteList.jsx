import SingleFavorite from './SingleFavorite.jsx';

const FavoriteList = (props) => {

 // if no favorite has been selected, don’t display the favorites 
  if (!props.favorite){
    return
  }

    return(
        <div className="flex flex-wrap">
           {props.favorite.map((c,indx) => <SingleFavorite sf={c} key={indx}/>)}
        </div>
    )
}

export default FavoriteList;