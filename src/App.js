import { useEffect, useState} from 'react';

import Moviecard from './Moviecard';
import './App.css';
import SearchIcon from './search.svg';
const api_url = "https://omdbapi.com?apikey=9c1ec61d"

const movie1={
    "Title": "Superman & Lois",
    "Year": "2021–2024",
    "imdbID": "tt11192306",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzdmYjAyODUtMTFkOS00MDg1LTljMDAtNzhiYTg5NjY1NjM5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"
};
const App = () =>{
    const [movies,setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState('');
    const searchMovies = async(title)=>{
        const response =  await fetch(`${api_url}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
       searchMovies();
    },[])
    return (
      <div className='app'>
        <h1>R.Anuragav</h1>
        <div className='search'>
           <input
           placeholder='Search for movies'
           value={searchTerm}
           onChange={(e)=>setSearchTerm(e.target.value)}
           />
           <img 
           src={SearchIcon}
           alt='search'
           onClick={() => searchMovies(searchTerm)}
           />
        </div>
        { movies?.length>0
            ?(
            <div className='container'>
                {movies.map((movie)=>(
                    <Moviecard movie={movie}/>
                ))}
     
            </div> 
            ):
            (
             <div className='empty'>
                 <h2>No movies found</h2>
             </div>
            )
        }
        
      </div>
    );
}
export default App;