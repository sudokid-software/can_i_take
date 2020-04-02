const init = (usernames) =>{
    return {username: usernames};
  };
  
 const reducer = (state, action) => {
    switch (action.type) {
      case 'addUsername':
        state.username = action.username;
        break;
    }
  }

export { reducer, init };