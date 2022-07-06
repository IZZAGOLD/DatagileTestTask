export interface CounterType {
    id: string,
    isRare: boolean,
    count: number
}

export interface CounterState {
    counters: CounterType[]
}

export enum CountersActionTypes {
    ADD_COUNTER = 'ADD_COUNTER',
    REMOVE_COUNTER = 'REMOVE_COUNTER',
    INCREASE_COUNTER = 'INCREASE_COUNTER',
    DECREASE_COUNTER = 'DECREASE_COUNTER',
}

export interface AddCounterAction {
    type: CountersActionTypes.ADD_COUNTER,
    payload: CounterType
}

export interface RemoveCounterAction {
    type: CountersActionTypes.REMOVE_COUNTER,
    payload: string
}

export interface IncreaseCounterAction {
    type: CountersActionTypes.INCREASE_COUNTER,
    payload: string
}

export interface DecreaseCounterAction {
    type: CountersActionTypes.DECREASE_COUNTER,
    payload: string
}

export type CountersAction = AddCounterAction |
    RemoveCounterAction |
    IncreaseCounterAction |
    DecreaseCounterAction