 const  getIsLoggedIn = state => state.auth.isLoggedIn;

 const getUserName = state => state.auth.user.name;

 const getRefreshingUser = state => state.auth.isLoading;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getRefreshingUser
};

 export default authSelectors;