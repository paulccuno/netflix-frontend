import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { USER_KEY } from '../../constants/storage';
import { profileSelection } from '../../routes/routes';
import { getGenres, getTopMovies } from '../../services/catalog,services';
import GenreCarousel from '../../components/catalog/genreCarousel';
import CatalogCarousel from '../../components/catalog/catalogCarousel';
import CatalogCard from '../../components/catalog/catalogCard';
import MoviesContext from '../../context/moviesContext';
import MainCard from '../../components/catalog/mainCard';
import MainMedia from '../../components/catalog/mainMedia';
import './styles.scss';

const Catalog = () => {
  const [user, setUser] = useState({});
  const [genres, setGenres] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const { userMovies } = useContext(MoviesContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(USER_KEY));
    setUser(data);

    getGenres().then(data => setGenres(data.genres));
    getTopMovies().then(data => setTopMovies(data.results));
  }, []);

  if (!user) return <Redirect to={profileSelection} />;

  return (
    <section className='catalog'>
      <MainMedia serie media={topMovies[0] || {}} />
      <div className='content'>
        {userMovies?.length > 0 && (
          <CatalogCarousel
            title='Mis favoritos'
            items={userMovies}
            renderItem={movie => (
              <CatalogCard key={`movie-${movie.id}`} movie={movie} genres={genres} />
            )}
          />
        )}
        <CatalogCarousel
          title='Solo en Netflix'
          items={topMovies}
          renderItem={movie => <MainCard key={`movie-${movie.id}`} movie={movie} genres={genres} />}
        />
        {genres.map(({ id, name }) => (
          <GenreCarousel key={`carousel-${id}`} id={id} title={name} genres={genres} />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
