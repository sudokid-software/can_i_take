const init = () =>{
    return {
      username: '',
      email: '',
      password1: '',
      password2: ''
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
    case 'UPDATE_FORM':
      return Object.assign({}, state, {
        [action.name]: action.value
      });
    case 'SEND_FORM_DATA':
      return Object.assign({}, state, init());
    case 'ERROR':
      return Object.assign({}, state, {
        error: action.value
      });
    default:
      throw new Error('Invalid action given to register reducer');
  }
};

export { reducer, init, initialValues };