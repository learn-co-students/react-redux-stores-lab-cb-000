import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'

export default function createStore(reducer){
// your code here!
  let state;
  let listeners= [];

  const subscribe = (listener) => {
    listeners.push(listener)
  }

  const getState = () => {
    return state
  }

  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach(
      listener => listener()
    )
  }

  dispatch({type:"Initial Action"})

    return {
      getState: getState,
      dispatch: dispatch,
      subscribe: subscribe
      }
  }
