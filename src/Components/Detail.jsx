import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4a882964e439e3d28dc23cf87dd21b70`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className='w-full h-[600px] text-white'>
        <div className='w-full h-full'>
          <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
          <img
            className='w-full h-full object-cover'
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title}
          />
                 <div className='absolute w-full items-center justify-center top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <div className='my-4'>
            
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>
              Play
            </button>

            <button className='border text-white border-gray-300 py-2 px-5 ml-4'>
              Watch Later
            </button>
          </div>
          <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
         
        </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
