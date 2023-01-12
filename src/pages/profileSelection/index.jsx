import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileCard from '../../components/profile/profileCard/profileCard';
import { USER_KEY } from '../../constants/storage';
import { catalog } from '../../routes/routes';
import UserContext from '../../context/userContext';
import './styles.scss';

const ProfileSelection = () => {
  const { users, updateCurrentUser } = useContext(UserContext);

  const history = useHistory();

  const handleUserClick = id => {
    const user = users.find(user => user.id === id);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    updateCurrentUser(user);
    history.push(catalog);
  };

  return (
    <section className='profile-selection'>
      <div className='content'>
        <h1 className='title'>¿Quién está viendo ahora?</h1>
        <br />
        <br />
        <div className='users'>
          {users.map(({ id, img, username }) => (
            <ProfileCard
              key={`user-${id}`}
              id={id}
              img={img}
              username={username}
              onClick={handleUserClick}
            />
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
        <button className='update'>Administrar perfiles</button>
      </div>
    </section>
  );
};

export default ProfileSelection;
