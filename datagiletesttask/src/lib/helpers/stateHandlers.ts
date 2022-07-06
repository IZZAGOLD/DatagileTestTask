import {CountersAction, CounterState} from "../../store/reducers/counters/types";

export const removeCounterHandler = (state: CounterState, action: CountersAction) => {
    return state.counters.filter(counter => counter.id !== action.payload)
}

export const increaseCounterHandler = (state: CounterState, action: CountersAction) => {
    return state.counters.map((counter) => {
        if (counter.id === action.payload) return {
            ...counter,
            count: counter.count + 1
        }
        return counter
    })
}

export const decreaseCounterHandler = (state: CounterState, action: CountersAction) => {
    return state.counters.map((counter) => {
        if (counter.id === action.payload) return {
            ...counter,
            count: counter.count - 1
        }
        return counter
    })
}