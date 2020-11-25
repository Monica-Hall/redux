const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':

        // change code below this line
        // Don't mutate state here or the tests will fail
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1, state.length)
        ]
        // change code above this line
        
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);
  