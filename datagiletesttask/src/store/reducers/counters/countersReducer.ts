import {CountersAction, CountersActionTypes, CounterState} from './types'
import {decreaseCounterHandler, increaseCounterHandler, removeCounterHandler} from "../../../lib/helpers/stateHandlers";

const initialState: CounterState = {
    counters: [],
}

export default function countersReducer(state = initialState, action: CountersAction): CounterState  {
    switch (action.type) {
        case CountersActionTypes.ADD_COUNTER:
            return {...state, counters: [...state.counters, action.payload]}
        case CountersActionTypes.REMOVE_COUNTER:
            return {...state, counters: removeCounterHandler(state, action) }
        case CountersActionTypes.INCREASE_COUNTER:
            return {...state, counters: increaseCounterHandler(state, action)}
        case CountersActionTypes.DECREASE_COUNTER:
            return {...state, counters: decreaseCounterHandler(state, action)}
        default:
            return state;

    }
}