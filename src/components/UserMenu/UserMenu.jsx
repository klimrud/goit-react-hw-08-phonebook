 import { useDispatch, useSelector } from 'react-redux';
 import { logOut } from 'store/auth/auth-operations';
 import authSelectors from 'store/auth/auth-selectors';
//  import { useAuth } from 'hooks';
 import css from './UserMenu.module.css';

export const UserMenu = () => {
   const dispatch = useDispatch();
  //  const { user } = useAuth();
  const name= useSelector(authSelectors.getUserName);


  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome,
       {name}
       </p>
      <button type="button" 
       onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
