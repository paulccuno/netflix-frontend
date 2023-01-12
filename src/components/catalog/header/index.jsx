import React, { useContext, useState, useMemo } from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../../assets/netflix-logo.png';
import UserContext from '../../../context/userContext';
import { profileSelection, profileUpdate, catalog, login } from '../../../routes/routes';
import { DEFAULT_USER_IMG } from '../../../constants/resources';
import { Popover } from 'react-tiny-popover';
import { TOKEN_KEY } from '../../../constants/storage';
import './styles.scss';

const CatalogHeader = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const { currentUser, users } = useContext(UserContext);

  const leftUsers = useMemo(() => {
    return users.filter(user => user.id !== currentUser?.id);
  }, [currentUser, users]);

  const handleOpenOptions = () => setOpenOptions(!openOptions);

  if (!currentUser) return <Redirect to={profileSelection} />;

  return (
    <header className='catalog-header'>
      <div className='left'>
        <img className='logo' src={logo} alt='Netflix' />
        <div className='menu'>
          <Link to={catalog}>Inicio</Link>
        </div>
      </div>
      <div className='right'>
        <Popover
          isOpen={openOptions}
          content={<UserOptions users={leftUsers} />}
          positions={['bottom']}
          align='end'
        >
          <img
            className='picture'
            src={currentUser.img || DEFAULT_USER_IMG}
            alt={currentUser.username}
            onClick={handleOpenOptions}
          />
        </Popover>
      </div>
    </header>
  );
};

const UserOptions = ({ users }) => {
  const history = useHistory();

  const handleAccountClick = () => history.push(profileUpdate);

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    history.push(login);
  };

  return (
    <div className='user-options'>
      <div className='wrapper'>
        {users.map(user => (
          <div className='user' key={`user-${user.id}`}>
            <img className='picture' src={user.img || DEFAULT_USER_IMG} alt={user.username} />
            <p className='name'>{user.username}</p>
          </div>
        ))}
        <br />
        <Link className='link' to={profileSelection}>
          Administrar perfiles
        </Link>
      </div>
      <hr />
      <div className='wrapper'>
        <p className='option' onClick={handleAccountClick}>
          Cuenta
        </p>
        <p className='option' onClick={logout}>
          Cerrar sesión en Netflix
        </p>
      </div>
    </div>
  );
};

UserOptions.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default CatalogHeader;
