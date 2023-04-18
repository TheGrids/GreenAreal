import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import Card from './Card';
import './ItemsList.css'
import './ItemsListM.css'

interface IProduct {
    id: number;
    name: string;
    price: number
    category: string
    image: string
}

interface props{
    name: string;
    url: string
}

const ItemsList: FC<props> = (props) => {
    const [error, setError] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        axios
            .get<IProduct[]>(props.url)
            .then(response => {
                setProducts(response.data)
                setIsLoaded(true)
            })
            .catch(error => {
                setError(error)
                setIsLoaded(true)
            })
    }, []);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
        <div className='main_items_list'>
            <div style={{margin: '20px 0'}}>{props.name}</div>
            <div className='cards_list'>
                {products.length ? (products.map(item => (
                    <Card key={item.id} id={item.id} name={item.name} price={item.price} category={item.category} image={item.image}/>
                ))
                ) : (
                    <div style={{fontSize: '24px'}}>Список пуст</div>
                )}
            </div>
        </div>
        );
    }
  };
  
export default ItemsList;