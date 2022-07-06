import './App.css';
import {v4 as uuid} from 'uuid';
import {useActions} from "./lib/hooks/useActions";
import Counter from "./components/Counter/Counter";
import {CounterType} from "./store/reducers/counters/types";
import {useTypedSelector} from "./lib/hooks/useTypedSelector";
import {getTotalCount} from "./lib/helpers/helper";
import {WHICH_COUNTER_IS_RARE} from "./lib/consts/globalConsts";

function App(){
    const {counters} = useTypedSelector((state) => state.counters)
    const {addCounter, increaseCounter, decreaseCounter, removeCounter} = useActions()
    const totalCount = getTotalCount(counters)

    return (
        <div className="App">

            <h1>{`Total count: ${totalCount}`}</h1>

            <button
                className={'shine-button'}
                onClick={() => {
                    addCounter({
                        id: uuid(),
                        count: getTotalCount(counters),
                        isRare: counters[0] && counters.length % WHICH_COUNTER_IS_RARE === 0
                    })}}>
                Add counter
            </button>

            {
                !!counters.length && counters.map((counter: CounterType) => {
                    return <Counter
                        key={counter.id}
                        increaseCounter={increaseCounter}
                        decreaseCounter={decreaseCounter}
                        removeCounter={removeCounter}
                        counter={counter}/>
                })
            }
        </div>
    );
}

export default App;
