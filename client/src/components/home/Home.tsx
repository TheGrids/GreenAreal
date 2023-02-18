import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterState, decrement, increment } from '../../store/reducers';
import './Home.css'
import ItemsList from './itemsList/ItemsList';
import MainContent from './mainContent/MainContent';

const Home: FC = () => {
    const count = useSelector((state: { counter: CounterState }) => state.counter.count);
    const dispatch = useDispatch();
  
    const handleIncrement = () => {
      dispatch(increment(1));
    };
  
    const handleDecrement = () => {
      dispatch(decrement(1));
    };

    return (
        <div className='home'>
            <MainContent/>
            <ItemsList name='Новое поступление:'/>
            <ItemsList name='Берут чаще всего:'/>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Home;