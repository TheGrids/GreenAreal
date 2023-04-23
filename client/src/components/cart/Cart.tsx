import React, { FC, useEffect, useState } from "react";
import "./Cart.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../home/itemsList/Card";
import LoadingSpinner from "../spinner/Spinner";
import { Helmet } from "react-helmet";

interface IResult {
    id: number;
    name: string;
    price: number
    category: string
    image: string
}

const Cart: FC = () => {

    let lst: any = []
    let location = useLocation();
    let res = decodeURIComponent(location.search.slice(1))
    let search_api_url = import.meta.env.VITE_API_URL + '/products'
    const [error, setError] = useState<any>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [list, setList] = useState<any>([])
    const [results, setResults] = useState<IResult[]>([]);
    const [isChecked, setIsChecked] = useState(false)
    
    useEffect(() => {
        window.scrollTo(0, 0)
        setIsLoaded(false)
        var itemsFromStorage = localStorage.getItem('cart') // сейчас там строка
        if (itemsFromStorage != null) {
            let b = JSON.parse(itemsFromStorage)
            setList(b)
            setIsLoaded(true)
        } else {
            setList([])
            setIsLoaded(true)
        }
    }, []);

    /* КОСТЫЛИ!!!!!!!!!!!!!!!!!!!!
    Ну, завтра дедлайн. МНе можно :3
    
    P.S. Самому за такое стыдно.
    */
    useEffect(() => {
        window.scrollTo(0, 0)
        setIsLoaded(false)
        var itemsFromStorage = localStorage.getItem('cart')
        if (itemsFromStorage != null) {
            let b = JSON.parse(itemsFromStorage)
            setList(b)
            setIsLoaded(true)
        } else {
            setList([])
            setIsLoaded(true)
        }
    }, [isChecked]);

    const incr = ((sum: any, id: any) => {
        var itemsFromStorage = localStorage.getItem('cart')
        if (itemsFromStorage != null && sum) {
            let b = JSON.parse(itemsFromStorage)
            b.find((lst: { id: number; }) => lst.id == id).count += 1
            localStorage.setItem('cart', JSON.stringify(b));
            setIsChecked(!isChecked)
        } else if (itemsFromStorage != null && !sum) {
            let b = JSON.parse(itemsFromStorage)
            b.find((lst: { id: number; }) => lst.id == id).count -= 1
            if (b.find((lst: { id: number; }) => lst.id == id).count < 1) {
                b.splice(b.findIndex((lst: { id: number; }) => lst.id == id), 1)
            }
            localStorage.setItem('cart', JSON.stringify(b));
            setIsChecked(!isChecked)
        } else {
            console.log('Ошибка. Очистите localstorage и перезапустите страницу.')
        }
    })

    if (error) {
        return <div>Ошибка: {error}</div>;
    } else if (!isLoaded) {
        return <div><LoadingSpinner/></div>;
    } else {
        return (
            <div className="search_result">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Корзина</title>
                    <link rel="canonical" href={"http://greenareal.ru/cart"} />
                </Helmet>
                <div>Корзина:</div>
                <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '90%'}}>
                        {list.length > 0 ? (list.map((item: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; count: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })  => (
                            <div className="cart_product" key={item.id}>
                                <Link to={import.meta.env.VITE_BASE_URL + '/product/' + item.id}>{item.name}</Link>
                                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <div style={{marginRight: '10px'}}>{item.price} ₽</div>
                                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                        <div onClick={() => incr(false, item.id)} className="incr">-</div>
                                        <div className="count">{item.count}</div>
                                        <div onClick={() => incr(true, item.id)} className="incr">+</div>
                                    </div>
                                </div>
                            </div>
                        ))
                        ) : (
                            <div style={{fontSize: '24px'}}>Ничего не найдено :(</div>
                        )}
                    </div>
                </div>
            </div>
        );
        }
    }

export default Cart;