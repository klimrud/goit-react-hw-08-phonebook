import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import authSelectors from 'store/auth/auth-selectors';
import { logOut } from 'store/auth/auth-operations';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector(authSelectors.getUserName);

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logOut())
      .unwrap()
      .then(() => navigate('/'));
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {name}</p>
      <button type="button" className={css.btn} onClick={handleSubmit}>
        Logout
      </button>
    </div>
  );
};
