export default function createStore(reducer){
  let state;
  let listeners = [];
 
  const getState = () => { 
    return state; 
  };

  const dispatch = (action) => {
   state = reducer(state, action)
   listeners.forEach( listener => listener() ) 
  }

  const subscribe = (listener) => {
    listeners.push(listener);
  };
 
  dispatch({type: "INTIALIZE_STATE"});

  return {
    getState: getState,   
    dispatch: dispatch,
    subscribe: subscribe       
  }


}
