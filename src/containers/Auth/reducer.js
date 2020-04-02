const init = ({formData}) =>{
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
    default:
      throw new Error('Invalid action given to register reducer');
  }
};

export { reducer, init, initialValues };