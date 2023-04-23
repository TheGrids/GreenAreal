import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Product.css'
import {Helmet} from "react-helmet";
import LoadingSpinner from '../spinner/Spinner';
import { Link, useLocation } from 'react-router-dom';

interface IProduct {
    id: number;
    name: string;
    price: number
    category: string
    description: string
    image: string
}

const Product: FC = () => {
    let params = useParams()
    let id = params.id
    let product_api_url = import.meta.env.VITE_API_URL + '/product/' + id
    let image_url = import.meta.env.VITE_API_URL + '/image/products/'
    const [error, setError] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [product, setProduct] = useState<IProduct>();
    const [buy, setBuy] = useState(false)
    const [list, setList] = useState<any>([])
    let lst: any = [];

    let location = useLocation();

    useEffect(() => {
        setIsLoaded(false)
        window.scrollTo(0, 0)
        axios
            .get<IProduct>(product_api_url)
            .then(response => {
                setProduct(response.data)
                setIsLoaded(true)
            })
            .catch(error => {
                setError(error)
                console.log(error.response.data.error)
                setIsLoaded(true)
            })
    }, [location]);

    useEffect(() => {
        var itemsFromStorage = localStorage.getItem('cart') // сейчас там строка
        if (itemsFromStorage != null) {
            let b = JSON.parse(itemsFromStorage)
            setList(b)
            if (b.find((lst: { id: number; }) => lst.id == product?.id)){
              setBuy(true)
            } else {
              setBuy(false)
            }
        } else {
            setList([])
            setBuy(false)
        }
    }, [product]);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        var itemsFromStorage = localStorage.getItem('cart') // сейчас там строка
        if (itemsFromStorage != null) {
          lst = JSON.parse(itemsFromStorage)
          if (list.find((lst: { id: number; }) => lst.id == product?.id)) {
            list.find((lst: { id: number; }) => lst.id == product?.id).count += 1
          } else {
            list.push({id: product?.id, 'name': product?.name, 'price': product?.price, 'image': product?.image, 'count': 1})
          }
        } else {
          lst = []
          list.push({id: product?.id, 'name': product?.name, 'price': product?.price, 'image': product?.image, 'count': 1})
        }
        localStorage.setItem('cart', JSON.stringify(list));
        setBuy(true)
      };

    if (error) {
        return <div>Ошибка: Товар не найден</div>;
    } else if (!isLoaded) {
        return <div><LoadingSpinner/></div>;
    } else {
        return (
        <div className='main_item_card'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{product?.name}</title>
                <link rel="canonical" href="https://greenareal.ru/product/:id" />
            </Helmet>
            <img src={image_url + product?.image} alt={product?.name} />
            <div className='info'>
                <div>{product?.name}</div>
                <div className='bottom'>
                <div className='available_box'>
                        <div className='available'>Есть в наличии</div>
                    </div>
                    <div className='price'>
                        {product?.price} ₽
                        {buy ? (
                            <Link to={import.meta.env.VITE_BASE_URL + '/cart'} style={{backgroundColor: 'white', color: 'black'}} className='card_price'>В корзину</Link>
                        ) : (
                            <div className='card_price' onClick={handleSubmit}>Купить</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        );
    }
};
  
export default Product;