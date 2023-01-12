import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById, getMovieVideos } from '../../services/catalog,services';
import ReactPlayer from 'react-player';
import './styles.scss';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  const videoUrl = useMemo(() => {
    return videos.length > 0
      ? `https://www.youtube.com/watch?v=${videos[0].key}`
      : 'https://www.youtube.com/watch?v=lBcWt1wJvIs';
  }, [videos]);

  useEffect(() => {
    getMovieById(id).then(data => setMovie(data));
    getMovieVideos(id).then(data => setVideos(data?.results || []));
  }, [id]);

  return (
    <section className='movie'>
      {movie && (
        <ReactPlayer
          playing
          url={videoUrl}
          loop
          width='100%'
          height='95%'
          config={{
            youtube: {
              playerVars: { showinfo: 0 },
            },
          }}
        />
      )}
    </section>
  );
};

export default Movie;
