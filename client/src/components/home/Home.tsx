import { FC } from 'react';
import { Helmet } from 'react-helmet';
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
        <div>
          <Helmet>
              <meta charSet="utf-8" />
              <title>Главная</title>
              <link rel="canonical" href="http://greenareal.ru/" />
          </Helmet>
          <MainContent/>
          <ItemsList name='Новое поступление:' url={import.meta.env.VITE_API_URL + '/new_products'}/>
          <ItemsList name='Берут чаще всего:'url={import.meta.env.VITE_API_URL + '/popular_products'}/>
        </div>
    );
};

export default Home;