
const SingleFavorite = (props) => {
    return(
        <div className="pl-2 pr-2">
            <img src={' https://image.tmdb.org/t/p/w92' + props.sf.poster + '.jpg'}  alt={props.sf.title} />
        </div>
    )
}

export default SingleFavorite;