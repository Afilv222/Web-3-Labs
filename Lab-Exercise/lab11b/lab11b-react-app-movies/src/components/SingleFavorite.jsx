
const SingleFavorite = (props) => {
    return(
        <div>
            { props.sf.poster}
            {/* <img src={' https://image.tmdb.org/t/p/w342' + props.sf.poster + '.jpg'}  alt={props.sf.title} /> */}
        </div>
    )
}

export default SingleFavorite;