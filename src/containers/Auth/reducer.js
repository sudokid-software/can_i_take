const init = ({username, email, password1, password2}) =>{
    return {
      username,
      email,
      password1,
      password2
    };
  };

const initialValues = {
    initialValues: {
      username: '',
      email: '',
      password1: '',
      password2: ''
    }
};
  
 const reducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'addUsername':
      state.username = action.username;
      break;
    default:
      break;
  }
};

export { reducer, init, initialValues };