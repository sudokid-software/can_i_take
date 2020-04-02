const init = (usernames) =>{
    return {username: usernames};
  };

const initialValues = {
    initialValues: {username: ''}
};
  
 const reducer = (state = initialValues, action) => {
    switch (action.type) {
      case 'addUsername':
        state.username = action.username;
        break;
    }
  }

export { reducer, init, initialValues };