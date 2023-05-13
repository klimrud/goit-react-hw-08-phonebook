import { useSelector } from 'react-redux';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import authSelectors from 'store/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottom: '1px solid #fff',
  },
};

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
