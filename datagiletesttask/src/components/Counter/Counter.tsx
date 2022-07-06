import React, {useEffect} from 'react';
import styles from './counter.module.css';
import {CountersAction, CounterType} from "../../store/reducers/counters/types";

interface CounterProps {
    counter: CounterType,
    removeCounter: (payload: string) => CountersAction,
    increaseCounter: (payload: string) => CountersAction,
    decreaseCounter: (payload: string) => CountersAction,
}

const Counter = ({counter, removeCounter, increaseCounter, decreaseCounter}: CounterProps) => {

    useEffect(() => {
        if (!counter.isRare) return
        const timerId = setInterval(() => {
            increaseCounter(counter.id)
        }, 1000)

        return () => {
            clearInterval(timerId);
        }
    }, [counter.isRare])


    return (
        <div
            className={styles.container}
            key={counter.id}>

            <button onClick={() => removeCounter(counter.id)}>remove</button>
            <div className={counter.isRare ? styles.contentNotRare : styles.content}>
                {
                    !counter.isRare &&
                    <button onClick={() => increaseCounter(counter.id)}>+</button>
                }
                <div>{counter.count}</div>
                {
                    !counter.isRare &&
                    <button onClick={() => decreaseCounter(counter.id)}>-</button>
                }
            </div>

        </div>
    );
};

export default Counter;