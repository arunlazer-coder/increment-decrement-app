import * as redux from 'redux';

export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';

const initialState = {
    counter:0
};

const reducer = (state = initialState, action) => {
        switch(action.type){
            case COUNTER_INCREMENT:{
                return {...state, counter: state.counter +1};
                break;}
            case COUNTER_DECREMENT:{
                return {...state, counter: state.counter - 1};
                break;}
            default:{
                return state;}
        }
    }


export const store  = redux.createStore(reducer);

