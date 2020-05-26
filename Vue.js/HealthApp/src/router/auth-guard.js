export default (to, from, next) => {
  if (localStorage.getItem('token') !== null) {
    next();
  } else {
    next("/");
  }
};
