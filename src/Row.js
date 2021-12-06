import react from "react" 
import useSWR from "swr";
import axios from "./axios";
import fetcher from "./fetcher";
import './Row.css';

const image_base_url = "https://image.tmdb.org/t/p/w500";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const { data, error } = useSWR(fetchUrl, fetcher);
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return ( 
        
        <div className="row">
            <h2>{title}</h2>
            <div className ="row__posters">

                {data.results.map(movie =>(
                    <img 
                    key = {movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${image_base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path 
                    }`} 
                    alt={movie.name}/>
                    ))} 
            </div>
        </div>
    )
}

export default Row;
