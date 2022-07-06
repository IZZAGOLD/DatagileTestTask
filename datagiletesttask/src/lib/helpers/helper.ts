import {CounterType} from "../../store/reducers/counters/types";

export const getTotalCount = (counters: CounterType[]) => {
    return counters.reduce((previousValue: number, currentValue: CounterType) => previousValue + currentValue?.count, 0)
}