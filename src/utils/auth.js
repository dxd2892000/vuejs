
export const token = () => {
  const token = !!localStorage.getItem('token') ? localStorage.getItem('token') : '';
  console.log(token)
  return token;
};

