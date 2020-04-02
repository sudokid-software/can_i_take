const init = (usernames) =>{
    return {username: usernames};
  };

const initialValues = {
    username: ''
};
  
 const reducer = (state = initialValues, action) => {
    switch (action.type) {
      case 'addUsername':
        console.log(action);
        state.username = action.username;
        break;
    }
  }

export { reducer, init, initialValues };