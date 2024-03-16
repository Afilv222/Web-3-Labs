
import Header from './Header'
import MovieList from './MovieList'


const MovieBrowser= (props) => {



    return (
        <main className="section">
            <article className="container">
                <Header/>
                <MovieList/>
            </article>
        </main>
    )
}

export default MovieBrowser;