import FavoriteList from './FavoriteList.jsx';

const Header= (props) => {
 
    return(
        <section className="favorites">
            <h1 className='flex justify-start font-bold text-base/6'>Favorites</h1>
            <FavoriteList favorite={props.fav}  />
        </section>
    )
}

export default Header;