import { createStore } from 'redux';


const dispatcher = ({ counter = 1, type='RESET' } = {}) => ({
    type: type,
    counter
});

const counterReducer = (state = { count: 0 }, action) => {
    
    const counter = typeof action.counter === 'number' ? action.counter : 1;
    switch(action.type){
        
        case 'INCREMENT':
            return {
                count: state.count + counter
            };
        case 'DECREMENT':
            return {
                count: state.count - counter
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET': 
            return {
                count: action.counter
            };
        default:
            return state;
    }

};

const store = createStore( counterReducer );


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});



store.dispatch(dispatcher({ type: 'INCREMENT', counter: 5 }));

store.dispatch({ type: 'INCREMENT'});

store.dispatch({ type: 'RESET'});

store.dispatch({ type: 'DECREMENT'});

store.dispatch(dispatcher({ type: 'DECREMENT', counter: 10 }));

store.dispatch({ type: 'SET', counter: 100 });
