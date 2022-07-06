import {CounterType, CountersAction, CountersActionTypes} from "./types";

export const CountersActionCreators = {
    addCounter: (payload: CounterType): CountersAction  => ({type: CountersActionTypes.ADD_COUNTER, payload}),
    increaseCounter: (payload: string): CountersAction => ({type: CountersActionTypes.INCREASE_COUNTER, payload}),
    decreaseCounter: (payload: string): CountersAction => ({type: CountersActionTypes.DECREASE_COUNTER, payload}),
    removeCounter: (payload: string): CountersAction => ({type: CountersActionTypes.REMOVE_COUNTER, payload}),
}